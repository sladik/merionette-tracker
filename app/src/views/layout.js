define([
  'jquery',
  'underscore',
  'backbone',
  'marionette'
],

function ($, _, Backbone, Marionette) {

  'use strict';

  return Marionette.Layout.extend({
    el : '[data-main-layout]',
    template : 'layout',
    regions : {
      collaborRegion : '[data-collabor-region]',
      repoRegion : '[data-repo-region]'
    }
  });

});
