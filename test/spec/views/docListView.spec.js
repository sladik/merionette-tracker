/*global describe ,it, expect, spyOn, beforeEach, afterEach */
define([
  'jquery',
  'backbone',
  'marionette',
  'views/docListView',
  'jasmine-jquery'
],

function ($, Backbone, Marionette, DocListView) {

  describe('Test for ListView of Documents', function() {
    var testModel, docListView;
    beforeEach(function () {
      testModel = new Backbone.Model({value:'test'});
      docListView = new DocListView();
      $('body').append(docListView.render().el);
    });
    afterEach(function () {
      docListView.remove();
      testModel.destroy();
    });

    describe('Template', function () {
      it('Template is defined', function () {
        expect(docListView.template).toBeDefined();
      });
    });

    describe('Initial setup', function () {
      it('Has correct tag', function () {
        expect(docListView.el.tagName.toLowerCase()).toEqual('ul');
      });
      it('ItemView property has been defined', function () {
        expect(docListView.itemView).toBeDefined();
      });
    });

    describe('Call functions', function () {
      it('Has set data to variable', function () {
        docListView.wasSelected({},5);
        expect(docListView.selectedIndex).toBe(5);
        });
    });
  });

});
