/*global describe ,it, expect, spyOn, beforeEach, afterEach */
define([
  'jquery',
  'backbone',
  'marionette',
  'app'
],

function ($, Backbone, Marionette, app) {

  describe('Tests for Application', function() {

    describe('Init options', function () {
      it('Vent object schould be defined', function () {
        expect(app.vent).toBeDefined();
      });
    });
  });

});
