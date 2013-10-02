require([
  'jquery',
  'underscore',
  'backbone',
  'app',
  'router',
  'override',
  'bootstrap',
  'backbone.stickit'
],

function ($, _, Backbone, app, Router) {

  'use strict';

  $(function () {
    app.router = new Router();
    var proxiedSync = Backbone.sync;

    Backbone.sync = function (method, model, options) {
      options || (options = {});

      if (!options.crossDomain) {
        options.crossDomain = true;
      }

      if (!options.xhrFields) {
        options.xhrFields = {withCredentials: true};
      }

      return proxiedSync(method, model, options);
    };
    app.vent = _.extend({}, Backbone.Events);
    app.start();
    Backbone.history.start();
  });

});
