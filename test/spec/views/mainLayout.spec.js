/*global describe ,it, expect, spyOn, beforeEach, afterEach */
define([
  'jquery',
  'backbone',
  'marionette',
  'views/mainLayout',
  'jasmine-jquery'
],

function ($, Backbone, Marionette, MainLayer) {

  describe('Test for main  Layer', function() {
    var mainLayer;
    beforeEach(function () {
      mainLayer = new MainLayer();
    });

    describe('Initial setup', function () {
      it('Template is defined', function () {
        expect(mainLayer.template).toBeDefined();
      });
      it('EL object has correct data attribute', function () {
        expect(mainLayer.$el.selector).toEqual('[data-main]');
      });
      it('Regions are defined', function () {
        expect(mainLayer.regions).toBeDefined();
        expect(Object.keys(mainLayer.regions).length).toBeGreaterThan(0);
      });
    });
  });

});

