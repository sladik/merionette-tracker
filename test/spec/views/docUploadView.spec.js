/*global describe ,it, expect, spyOn, beforeEach, afterEach */
define([
  'jquery',
  'backbone',
  'marionette',
  'views/docsuploadview',
  'jasmine-jquery'
],

function ($, Backbone, Marionette, DocUploadView) {

  describe('Test for ListView of Documents', function () {
    var docUploadView;
    beforeEach(function () {
      docUploadView = new DocUploadView();
      $('body').append(docUploadView.render().el);
    });

    afterEach(function () {
      docUploadView.remove();
    });

    describe('Initial setup', function () {
      it('Template is defined', function () {
        expect(docUploadView.template).toBeDefined();
      });
    });
  });

});

