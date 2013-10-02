define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/docItemView'
],

function ($, _, Backbone, Marionette, DocItemView) {

  'use strict';

  return Marionette.CollectionView.extend({
    template: 'doclist',

    tagName: 'ul',

    itemView: DocItemView,

    selectedIndex: null,

    initialize: function () {
      this.listenTo(this, 'itemview:wasSelected', this.wasSelected);
    },

    wasSelected: function (view, index) {
      this.selectedIndex = index;
    }

  });

});
