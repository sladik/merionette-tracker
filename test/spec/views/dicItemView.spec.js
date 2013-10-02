/*global describe ,it, expect, spyOn, beforeEach, afterEach */
define([
  'jquery',
  'backbone',
  'marionette',
  'views/docItemView',
  'jasmine-jquery'
],

function ($, Backbone, Marionette, DocItemView) {

  describe('Test for Each ItemViw of Documents', function () {
    var testModel, docView, testCollection;
    beforeEach(function () {
      testModel = new Backbone.Model({value: 'test'});
      docView = new DocItemView({model: testModel});
      $('body').append(docView.render().el);
      spyOn(docView, 'setSelectedDoc');
    });

    afterEach(function () {
      docView.remove();
      testModel.destroy();
    });

    describe('Template', function () {
      it('Template is defined', function () {
        expect(docView.template).toBeDefined();
      });
      it('All radio buttons were created', function () {
        expect($('[data-doc-item]')).toExist();
      });
    });

    describe('Initial setup', function () {
      it('Has correct tag', function () {
        expect(docView.el.tagName.toLowerCase()).toEqual('li');
      });

      it('Has model value in html', function () {
        expect(docView.$el).not.toBeEmpty();
      });
    });

    describe('Functions correct call', function () {
      it('Trigger event on click', function () {
        docView.delegateEvents();
        docView.$el.find('[data-doc-item]').trigger('click');
        expect(docView.setSelectedDoc).toHaveBeenCalled();
      });
      it('Trigger has been called after function run', function () {
        var docView = new DocItemView({model: testModel});
        docView.model.collection = [];
        spyOn(docView, 'trigger');
        docView.setSelectedDoc();
        expect(docView.trigger).toHaveBeenCalled();

      });
    });
  });

});
