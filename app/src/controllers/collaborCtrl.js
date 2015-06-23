define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'src/views/layout'
],

function ($, _, Backbone, Marionette, Layout) {

    'use strict';

    return Marionette.Controller.extend({

        initialize: function () {
            this.layout = new Layout();
        },

        initList: function () {
            console.log('collabor');
        }
    });

});
