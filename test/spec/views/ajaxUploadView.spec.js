/*global describe ,it, expect, spyOn, beforeEach, afterEach */
define([
  'jquery',
  'backbone',
  'marionette',
  'views/ajaxuploadview',
  'app',
  'jasmine-jquery'
],
function ($, Backbone, Marionette, AjaxUploadView, app) {

  describe('Test for ListView of Documents', function() {
    var ajaxUploadView;
    beforeEach(function () {
      ajaxUploadView = new AjaxUploadView();
      $('body').append(ajaxUploadView.render().el);
    });
    afterEach(function () {
      ajaxUploadView.remove();
    });

    describe('Initial setup', function () {
      it('Template is defined', function () {
        expect(ajaxUploadView.template).toBeDefined();
      });
    });

    describe('Rendering', function() {
      it('Elements of UI object exist', function () {
        expect($('[data-form]')).toExist();
        expect($('[data-upload]')).toExist();
      });
    });

    describe('Events trigger test', function () {
      beforeEach(function () {
        spyOn(ajaxUploadView, 'uploadFiles');
        spyOn(ajaxUploadView, 'noReload');
        spyOn($('[data-form]'), 'submit').andCallFake(function () {
          return false;
        });
        spyOn(ajaxUploadView, 'uploadFileHandler');
        ajaxUploadView.delegateEvents();
      });

      it('Should on change uploadFiles method call', function () {
        $('#upload').trigger('change');
        expect(ajaxUploadView.uploadFiles).toHaveBeenCalled();
      });
      it('Should on click uploadFileHandler method call', function () {
        $('[data-btn-upload]').trigger('click');
        expect(ajaxUploadView.uploadFileHandler).toHaveBeenCalled();
      });
    });

    describe('UploadFileHandler method test', function () {
      beforeEach(function () {
        spyOn(ajaxUploadView.ui.input, 'trigger');
        spyOn(ajaxUploadView, 'uploadFileHandler').andCallThrough();
        ajaxUploadView.delegateEvents();
      });
      it('Should on method calling trigger click event', function () {
        ajaxUploadView.uploadFileHandler();
        expect(ajaxUploadView.ui.input.trigger).toHaveBeenCalled();
        expect(ajaxUploadView.ui.input.trigger).toHaveBeenCalledWith('click');
      });
    });

    describe('UploadFiles method test', function () {
      beforeEach(function () {
        spyOn($, 'each');
        spyOn(ajaxUploadView, 'ajaxUpload');
        spyOn(app.router, 'navigate');
        spyOn(ajaxUploadView, 'uploadFiles').andCallThrough();
        ajaxUploadView.delegateEvents();
      });
      it('Each loop call after UploadFiles method run', function () {
        $('#upload')[0].files = [];
        ajaxUploadView.uploadFiles();
          expect($.each).toHaveBeenCalled();
        });
      it('Ajax request send', function () {
        ajaxUploadView.uploadFiles();
        expect(ajaxUploadView.ajaxUpload).toHaveBeenCalled();
      });
      it('Rout navigate call', function () {
        ajaxUploadView.uploadFiles();
          expect(app.router.navigate).toHaveBeenCalled();
          expect(app.router.navigate.calls[0].args.length).toEqual(2);
        });
      });

    describe('noReload method test', function () {
      beforeEach(function () {
        spyOn(ajaxUploadView, 'noReload').andCallThrough();
        ajaxUploadView.delegateEvents();
      });
      it('Should return false', function () {
        var result = ajaxUploadView.noReload();
        expect(result).toEqual(false);
      });
    });
  });

});


