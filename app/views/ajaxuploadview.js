define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'app',
  'globals'
],

function ($, _, Backbone, Marionette, app, globals) {

  'use strict';

  return Marionette.ItemView.extend({

    template: 'ajaxupload',

    events: {
      'change #upload': 'uploadFiles',
      'submit [data-form2]': 'noReload',
      'click [data-btn-upload]': 'uploadFileHandler'
    },

    ui: {
      'fileForm': '[data-form]',
      'input': '[data-upload]'
    },

    fileList: null,

    uploadFileHandler: function () {
      this.ui.input.trigger('click');
    },

    uploadFiles: function () {
      if (typeof window.FormData === 'undefined') {
        var file = this.ui.input.val();
        var fileExt = file.substr(file.lastIndexOf('.') + 1, file.length - 1);
        this.ui.fileForm.submit();
        switch (fileExt) {
          case 'doc' : app.router.navigate('docs', true); break;
          case 'docx' : app.router.navigate('docs', true); break;
          case 'pdf' : app.router.navigate('docs', true); break;
          case 'jpg' : app.router.navigate('images', true); break;
          case 'png' : app.router.navigate('images', true); break;
        }
      }
      else {
        var data = new FormData();
        var docs = [];
        var images = [];
        var rout;
        globals.variables.files = $('#upload')[0].files;
        $.each($('#upload')[0].files, function (i, file) {
          if (file.name.length < 1) {
            alert('File error');
          }
          if (file.size > 1000000) {
            alert('File is too big');
          }
          switch (file.type) {
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' : docs.push(file); break;
            case 'application/pdf' : docs.push(file); break;
            case 'image/jpeg' : images.push(file); break;
            case 'image/jpg' : images.push(file); break;
            case 'image/png' : images.push(file); break;
            case 'image/bmp' : images.push(file); break;
          }
        });
        if (docs.length && !images.length) {
          if (docs.length > 1) {
            $(docs).each(function (index, value) {
              data.append('file', value);
            });
            rout = 'choose';
            globals.variables.docsCount = docs.length;
          }
          else {
            data.append('file', docs[0]);
            rout = 'docs';
            globals.variables.docsCount = 1;
          }

        }
        if (docs.length && images.length) {
          rout = 'choose';
          data = '';
        }
        if (!docs.length && images.length) {
          rout = 'images';
          $(images).each(function (index, value) {
            data.append('file', value);
          });
        }
        this.ajaxUpload(data);
        app.router.navigate(rout, true);
      }
    },

    ajaxUpload: function (data) {
      $.ajax({
        url: '/upload',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST'
      });
    },

    noReload: function () {
      return false;
    }

  });
});

