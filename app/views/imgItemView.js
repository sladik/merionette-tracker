define([
  'jquery',
  'underscore',
  'backbone',
  'marionette'
],

function ($, _, Backbone, Marionette) {

  'use strict';

  return Marionette.ItemView.extend({

    tagName: 'li',

    template : 'imgitem'
  });

});
