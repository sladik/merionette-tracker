define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'src/controllers/collaborCtrl',
  'src/controllers/repoCtrl'
],

function ($, _, Backbone, Marionette, CollaborCtrl, RepoCtrl) {

  'use strict';

  return Backbone.Router.extend({

    routes : {
      '' : 'initData'
    },

    initialize : function () {
      this.initControllers();
    },

    initControllers : function () {
      this.collaborCtrl = new CollaborCtrl();
      this.repoCtrl = new RepoCtrl();
    },

    initData : function () {
      this.collaborCtrl.initList();
      this.repoCtrl.initList();
    }

  });

});

