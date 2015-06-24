define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'src/views/sampleView',
],

function ($, _, Backbone, Marionette, SampleView) {

    'use strict';

    return Marionette.CollectionView.extend({

        className : 'list',

        itemView : SampleView

    });

});
