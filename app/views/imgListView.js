define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/imgItemView'
],

function ($, _, Backbone, Marionette, ImgItemView) {

  'use strict';

  return Marionette.CompositeView.extend({
    template: 'list',
    tagName: 'ul',
    itemView: ImgItemView
  });

});
