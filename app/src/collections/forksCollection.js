define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'globals',
    'src/models/forkModel',
    'plugins/moment'
],

function ($, _, Backbone, Marionette, globals, Model, moment) {

    'use strict';

    return Backbone.Collection.extend({

        model: Model,
        url: globals.constants.repoUrl + '/forks',

        parse : function (forks) {
            return _.map(forks, function (fork) {
                return {
                    id : fork.id,
                    created : moment(fork['created_at']).format('MM-DD-YYYY'),
                    language : fork.language,
                    privacy : fork.private,
                    description : fork.description,
                    updated : moment(fork['updated_at']).format('MM-DD-YYYY'),
                    avatarUrl : fork.owner['avatar_url'],
                    fullName : fork['full_name']
                }
            });
        }
    });

});
