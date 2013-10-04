define([
  'jquery',
  'underscore',
  'backbone',
  'marionette'
],

function ($, _, Backbone, Marionette) {

  'use strict';

  Marionette.TemplateCache.prototype.fetchTemplate = function(name) {
    if (_.isFunction(name)) {
      return name;
    }
    var template = window.JST && window.JST[name];
    if (!template) {
      var url = 'app/templates/' + name + '.html';
      $.ajax({url:url, async:false}).then(function (contents) {
        template = _.template(contents);
      });
    }
    return template;
  };

  Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
    return this.fetchTemplate(templateId);
  };

  Marionette.TemplateCache.prototype.compileTemplate = function(template) {
    return template;
  };

});