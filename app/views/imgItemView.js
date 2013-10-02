define([
  'jquery',
  'underscore',
  'backbone',
  'marionette'
],

function ($, _, Backbone, Marionette) {

  'use strict';

  return Backbone.View.extend({

    tagName: 'li',

    initialize: function () {
      this.$el.html(this.model.get('value'));
    }

  });

});
