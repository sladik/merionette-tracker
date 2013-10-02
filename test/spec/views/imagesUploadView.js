/*global describe ,it, expect, spyOn, beforeEach, afterEach */
define([
  'jquery',
  'backbone',
  'marionette',
  'views/imagesuploadview',
  'jasmine-jquery'
],

function ($, Backbone, Marionette, ImagesUploadView) {

  describe('Test for ListView of Documents', function () {
    var imagesUploadView;
    beforeEach(function () {
      imagesUploadView = new ImagesUploadView();
      $('body').append(imagesUploadView.render().el);
    });

    afterEach(function () {
      imagesUploadView.remove();
    });

    describe('Initial setup', function () {
      it('Template is defined', function () {
        expect(imagesUploadView.template).toBeDefined();
      });
    });
  });

});

