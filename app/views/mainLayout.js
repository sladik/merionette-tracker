define([
  'jquery',
  'underscore',
  'backbone',
  'marionette'
],

function ($, _, Backbone, Marionette) {

  'use strict';

  return Marionette.Layout.extend({
    el : '[data-main]',
    template : 'grid-main',
    regions : {
      container : '[data-grid-container]'
    }
  });

});
