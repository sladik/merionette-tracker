define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'src/views/layout',
    'src/collections/forksCollection',
    'src/views/forksListView'
],

function ($, _, Backbone, Marionette, Layout, Collection, ForkListView) {

    'use strict';

    return Marionette.Controller.extend({

        initialize: function () {
            this.initComponents();
            _.bindAll(this, 'showList');
        },


        initComponents: function () {
            this.layout = new Layout();
            this.layout.render();
            this.collection = new Collection();
        },

        showList : function () {
            this.layout.repoRegion.show(new ForkListView({collection:this.collection}));
        },


        initList: function () {
            this.collection.fetch().done(this.showList);
        }
    });

});
