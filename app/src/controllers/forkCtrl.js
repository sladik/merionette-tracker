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

        initialize : function () {
            this.initComponents();
            this.addEventHandlers();
            _.bindAll(this, 'showList');
        },


        addEventHandlers : function () {
            this.listenTo(this.collection, 'request', this.onCollectionFetchHandler);
            this.listenTo(this.collection, 'error sync', this.onCollectionSyncHandler);
        },


        onCollectionFetchHandler : function () {
            $('.loading').removeClass('hidden');
        },


        onCollectionSyncHandler : function () {
            $('.loading').addClass('hidden');
        },


        initComponents : function () {
            this.layout = new Layout();
            this.layout.render();
            this.collection = new Collection();
        },


        showList : function () {
            this.layout.repoRegion.show(new ForkListView({collection:this.collection}));
        },


        initList : function () {
            this.collection.fetch().done(this.showList);
        }
    });

});
