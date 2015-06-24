define([
    'jquery',
    'underscore',
    'backbone',
    'marionette'
],

function ($, _, Backbone, Marionette) {

    'use strict';

    return Backbone.Model.extend({
        defaults : {
            created : '',
            updated : '',
            avatarUrl : '',
            fullName : '',
            description : '',
            privacy : '',
            language : '',
            action : '',
            isLiked : false,
            isDisliked : false
        },
        url : '/action',

        save : function (attributes, options) {
            attributes || (attributes = {});
            options || (options = {});
            options.attrs = {
                'action' : this.get('action'),
                'id' : this.id
            };
            options.method = 'POST';
            return Backbone.Model.prototype.save.call(this, attributes, options);
        }
    });

});
