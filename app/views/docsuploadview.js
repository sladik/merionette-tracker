define([
  'jquery',
  'underscore',
  'backbone',
  'marionette'
],

function ($, _, Backbone, Marionette) {

  'use strict';

  return Marionette.ItemView.extend({

    template: 'docs',

    onRender: function () {
      console.log('2');
    }
  });

});
