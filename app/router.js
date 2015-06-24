define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'src/controllers/forkCtrl'
],

function ($, _, Backbone, Marionette, ForkCtrl) {

  'use strict';

  return Backbone.Router.extend({

    routes : {
      '' : 'initData'
    },


    initialize : function () {
      this.initControllers();
    },


    initControllers : function () {
      this.forkCtrl = new ForkCtrl();
    },


    initData : function () {
      this.forkCtrl.initList();
    }

  });

});

