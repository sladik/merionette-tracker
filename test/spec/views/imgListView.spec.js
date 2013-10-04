/*global describe ,it, expect, spyOn, beforeEach, afterEach */
define([
  'jquery',
  'backbone',
  'marionette',
  'views/imgListView',
  'jasmine-jquery'
],

function ($, Backbone, Marionette, ImgListView) {

  describe('Test for ListView of Documents', function () {
    var imgListView;
    beforeEach(function () {
      imgListView = new ImgListView();
      $('body').append(imgListView.render().el);
    });

    afterEach(function () {
      imgListView.remove();
    });

    describe('Initial setup', function () {
      it('Has correct tag', function () {
        expect(imgListView.el.tagName.toLowerCase()).toEqual('ul');
      });

      it('Template is defined', function () {
        expect(imgListView.template).toBeDefined();
      });

      it('ItemView property has been defined', function () {
        expect(imgListView.itemView).toBeDefined();
      });
    });
  });

});
