define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'app',
  'globals',
  'views/imgListView',
  'views/docListView'
],

function ($, _, Backbone, Marionette, app, globals, ImgListView, DocListView) {

  'use strict';

  return Marionette.ItemView.extend({

    template : 'choose',

    events : {
      'click [data-img-choice]' : 'imgUploadChoose',
      'click [data-doc-choice]' : 'docUploadChoose'
    },

    ui : {
      'imgList' : '[data-list-img]',
      'docList' : '[data-list-docs]'
    },

    initialize : function () {
      this.fileList = globals.variables.files;
    },

    imgUploadChoose : function () {
      var data = new FormData();
      $.each(this.fileList, function(index, value) {
        data.append('file', value);
      });
      this.ajaxUpload(data);
      app.router.navigate('images', true);
    },

    ajaxUpload : function (data) {
      $.ajax({
        url : '/upload',
        data : data,
        cache : false,
        contentType : false,
        processData : false,
        type : 'POST'
      });
    },

    docUploadChoose : function () {
      var docIndex = this.docListView.selectedIndex;
      var data = new FormData();
      data.append('file',  this.fileList[docIndex]);
      this.ajaxUpload(data);
      app.router.navigate('docs', true);
    },

    onRender : function () {
      var docs =[];
      var images =[];
      var imgNames = [];
      var docNames = [];
      if (this.fileList) {
        this.fileTypeRecognize(this.fileList, docs, docNames, images, imgNames);
        imgNames = this.arrayToObj(imgNames);
        docNames = this.arrayToObj(docNames);
        this.initViews(imgNames, docNames);
      }
    },

    fileTypeRecognize : function (obj, docs, docnames, images, imgnames) {
      $.each(obj, function (i, file) {
        switch (file.type) {
          case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' :  docs.push(file);
          docnames.push(file.name); break;
          case 'application/pdf' : docs.push(file); docnames.push(file.name); break;
          case 'image/jpeg' : images.push(file); imgnames.push(file.name); break;
          case 'image/jpg' : images.push(file); imgnames.push(file.name); break;
          case 'image/png' : images.push(file); imgnames.push(file.name); break;
          case 'image/bmp' : images.push(file); imgnames.push(file.name); break;
        }
      });
    },

    initViews : function (imgnames, docnames) {
      this.imageCollection = new Backbone.Collection(imgnames);
      this.docCollection = new Backbone.Collection(docnames);
      this.docListView = new DocListView({collection:this.docCollection});
      this.ui.docList.html(this.docListView.render().$el);
      if (globals.variables.docsCount < 1) {
        this.imgListView = new ImgListView({collection:this.imageCollection});
        this.ui.imgList.html(this.imgListView.render().$el);
      }
      else {
        this.$('[data-img-choice]').remove();
      }
    },

    arrayToObj : function (obj) {
      return _.map(obj, function (item) {
        return {
          value : item
        };
      });
    }
  });

});
