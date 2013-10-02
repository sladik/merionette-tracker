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
      'Fileform': '[data-form2]',
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
        this.ui.Fileform.submit();
        if (fileExt !== 'pdf') {
          app.router.navigate('images', true);
        }
        else {
          app.router.navigate('docs', true);
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
          if (file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'image/gif' && file.type !== 'image/jpeg') {
            docs.push(file);
          }
          else {
            images.push(file);
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

