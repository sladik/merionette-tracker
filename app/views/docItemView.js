define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'app'
],

function ($, _, Backbone, Marionette, app) {

  'use strict';

  return Marionette.ItemView.extend({
    template: 'docitem',

    tagName: 'li',

    events: {
      'click [data-doc-item]': 'setSelectedDoc'
    },

    initialize: function () {
      this.$el.html(this.model.get('value'));
    },

    setSelectedDoc: function () {
      this.trigger('wasSelected', this.model.collection.indexOf(this.model));
    }
  });

});
