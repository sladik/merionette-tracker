require([
  'jquery',
  'underscore',
  'backbone',
  'app',
  'router',
  'override',
  'backbone.stickit'
],

function ($, _, Backbone, app, Router) {

  'use strict';

  $(function () {
    app.router = new Router();
    app.start();
    Backbone.history.start();
  });

});
