define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/mainLayout',
  'views/imagesuploadview',
  'views/docsuploadview',
  'views/chooseuploadview',
  'views/ajaxuploadview'
],

function ($, _, Backbone, Marionette, Layout,  ImagesUploadView, DocsUploadView, ChooseUploadView, AjaxUploadView) {

  'use strict';

  return Backbone.Router.extend({

    initialize : function () {
      this.layout = new Layout();
      this.layout.render();
    },

    routes : {
      '' : 'ajaxUpload',
      'upload' : 'ajaxUpload',
      'images' : 'imagesUploaded',
      'docs' : 'docsUploaded',
      'choose' : 'chooseUpload'
    },

    imagesUploaded : function () {
      this.imagesUploadView = new ImagesUploadView();
      this.layout.container.show(this.imagesUploadView);
    },

    docsUploaded : function () {
      this.docsUploadView = new DocsUploadView();
      this.layout.container.show(this.docsUploadView);
    },

    chooseUpload : function () {
      this.chooseUploadView = new ChooseUploadView();
      this.layout.container.show(this.chooseUploadView);
    },

    ajaxUpload : function () {
      this.ajaxUploadView = new AjaxUploadView();
      this.layout.container.show(this.ajaxUploadView);
    }
  });

});

