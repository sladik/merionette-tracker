/*global describe ,it, expect, spyOn, beforeEach, afterEach */
define([
  'jquery',
  'backbone',
  'marionette',
  'views/chooseuploadview',
  'views/docListView',
  'app',
  'jasmine-jquery'
],

function ($, Backbone, Marionette, ChooseUploadView, DocListView, app) {

  describe('Test for ChooseUploadView', function () {
    var chooseUploadView;
    beforeEach(function () {
      chooseUploadView = new ChooseUploadView();
    });

    afterEach(function () {
      chooseUploadView.remove();
    });

    describe('Initial setup', function () {
      it('Template is defined', function () {
        expect(chooseUploadView.template).toBeDefined();
      });
      it('File list is defined and is not empty', function () {
        expect(chooseUploadView.fileList).toBeDefined();
      });
    });

    describe('Rendering', function () {
      beforeEach(function () {
        chooseUploadView.fileList = ['1'];
        spyOn(chooseUploadView, 'fileTypeRecognize');
        spyOn(chooseUploadView, 'arrayToObj').andCallThrough();
        spyOn(chooseUploadView, 'initViews');
        spyOn(chooseUploadView, 'render').andCallThrough();
      });
      it('Should recoznige filetypes by calling method', function () {
        chooseUploadView.render();
        expect(chooseUploadView.fileTypeRecognize).toHaveBeenCalled();
      });
      it('Should call twice method convert array to obj', function () {
        chooseUploadView.render();
        expect(chooseUploadView.arrayToObj.calls.length).toEqual(2);
      });
      it('Views initialize have been called width 2 arguments', function () {
        chooseUploadView.render();
        expect(chooseUploadView.initViews.calls[0].args.length).toEqual(2);
      });
      it('Returns the view object', function () {
        expect(chooseUploadView.render()).toEqual(chooseUploadView);
      });
    });

    describe('Creating UI elements and events on them', function () {
      beforeEach(function () {
        $('body').append(chooseUploadView.render().el);
        spyOn(chooseUploadView, 'imgUploadChoose');
        spyOn(chooseUploadView, 'docUploadChoose');
        chooseUploadView.delegateEvents();
      });
      afterEach(function () {
        chooseUploadView.remove();
      });
      it('Divs have been created after View rendering', function () {
        expect($('[data-img-chs]')).toExist();
        expect($('[data-doc-chs]')).toExist();
      });
      it('Methods calls on click', function () {
        $('[data-img-chs]').click();
        $('[data-doc-chs]').click();
        expect(chooseUploadView.imgUploadChoose).toHaveBeenCalled();
        expect(chooseUploadView.docUploadChoose).toHaveBeenCalled();
      });
    });

    describe('imgUploadChoose method testing', function () {
      beforeEach(function () {
        chooseUploadView.fileList = [];
        spyOn(app.router, 'navigate');
        spyOn(chooseUploadView, 'ajaxUpload');
        spyOn($, 'each');
        spyOn(chooseUploadView, 'imgUploadChoose').andCallThrough();
        chooseUploadView.delegateEvents();
      });
      it('Loop through files called', function () {
        chooseUploadView.imgUploadChoose();
        expect($.each).toHaveBeenCalled();
      });
      it('Ajax request send', function () {
        chooseUploadView.imgUploadChoose();
        expect(chooseUploadView.ajaxUpload).toHaveBeenCalled();
      });
      it('Router navigate called', function () {
        chooseUploadView.imgUploadChoose();
        expect(app.router.navigate).toHaveBeenCalled();
      });
      it('Correct rout address', function () {
        chooseUploadView.imgUploadChoose();
        expect(app.router.navigate).toHaveBeenCalledWith('images', true);
      });
    });

    describe('docUploadChoose method testing', function () {
      beforeEach(function () {
        chooseUploadView.docListView = new DocListView();
        chooseUploadView.docListView.selectedIndex = 0;
        chooseUploadView.fileList = [];
        spyOn(app.router, 'navigate');
        spyOn(chooseUploadView, 'ajaxUpload');
        spyOn(chooseUploadView, 'docUploadChoose').andCallThrough();
        chooseUploadView.delegateEvents();
      });

      afterEach(function () {
        chooseUploadView.docListView.remove();
      });

      it('Ajax has been called', function () {
        chooseUploadView.docUploadChoose();
        expect(chooseUploadView.ajaxUpload).toHaveBeenCalled();
      });
      it('Router navigate called', function () {
        chooseUploadView.docUploadChoose();
        expect(app.router.navigate).toHaveBeenCalled();
      });
      it('Correct rout address', function () {
        chooseUploadView.docUploadChoose();
        expect(app.router.navigate).toHaveBeenCalledWith('docs', true);
      });
    });

    describe('fileTypeRecognize method test', function () {
      beforeEach(function () {
        spyOn($, 'each');
        spyOn(chooseUploadView, 'fileTypeRecognize').andCallThrough();
        chooseUploadView.delegateEvents();
      });
      it('Each has been called', function () {
        chooseUploadView.fileTypeRecognize();
        expect($.each).toHaveBeenCalled();
      });
    });

  });

});

