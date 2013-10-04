/*global describe ,it, expect, spyOn, beforeEach, afterEach */
define([
  'jquery',
  'backbone',
  'marionette',
  'views/imgItemView',
  'jasmine-jquery'
],

function ($, Backbone, Marionette, ImgItemView) {

  describe('Test for Each ItemView of Images', function () {
    var testModel, imgItemView;
    beforeEach(function () {
      testModel = new Backbone.Model({value: 'test'});
      imgItemView = new ImgItemView({model: testModel});
      $('body').append(imgItemView.render().el);
    });

    afterEach(function () {
      imgItemView.remove();
      testModel.destroy();
    });

    describe('Initial setup', function () {
      it('Has correct tag', function () {
        expect(imgItemView.el.tagName.toLowerCase()).toEqual('li');
      });

      it('Has model value in html', function () {
        expect(imgItemView.$el.text()).toBe('test');
      });
    });


  });

});

