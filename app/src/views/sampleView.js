define([
    'jquery',
    'underscore',
    'backbone',
    'marionette'
],

function ($, _, Backbone, Marionette) {

    'use strict';

    return Marionette.ItemView.extend({
        className : 'well fork-item',
        template : 'item-view',
        bindings : {
            '[data-description]' : 'description',
            '[data-language]' : 'language',
            '[data-private]' : {
                observe : 'privacy',
                onGet: function(val) {
                    return 'Private: ' + (val ? 'Yes' : 'No');
                }
            },
            '[data-created-date]' : 'created',
            '[data-updated-date]' : 'updated',
            '[data-fullName]' : 'fullName',
            '[data-like]' : {
                updateView : false,
                observe : 'isLiked',
                attributes :[{
                    name : 'disabled',
                    observe : 'isLiked'
                }]
            },
            '[data-dislike]' : {
                observe : 'isDisliked',
                updateView : false,
                attributes :[{
                    name : 'disabled',
                    observe : 'isDisliked'
                }]
            }
        },

        events : {
            'click [data-action]' : 'btnActionClickHandler'
        },

        ui : {
            actionBtn : '[data-action]'
        },


        onRender: function () {
            this.stickit();
        },


        btnActionClickHandler : function (e) {
         var $el = $(e.currentTarget);
         this.model.set('action', $el.data('action'));
         var model = this.model;
         this.model.save()
             .done(function (res) {
                model.set(res.action === 'like' ? 'isLiked' : 'isDisliked', true);
                model.set(res.action === 'like' ? 'isDisliked' : 'isLiked', false);
             });

        }
    });

});
