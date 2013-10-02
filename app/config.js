require.config({
  'deps' : ['main'],
  'baseUrl' : '/app',
  'paths' : {
    'libs' : '/assets/libs',
    'plugins' : '/assets/plugins',
    'underscore' : '/assets/libs/underscore',

    'jquery' : '/assets/libs/jquery',
    'backbone' : '/assets/libs/backbone',
    'marionette' : '/assets/libs/marionette',
    'backbone.wreqr' : '/assets/libs/backbone.wreqr',
    'backbone.babysitter' : '/assets/libs/backbone.babysitter',
    'backbone.paginator' : '/assets/plugins/backbone.paginator',
    'backbone.stickit' : '/assets/plugins/backbone.stickit',
    'jasmine-jquery' : '/assets/libs/jasmine-jquery',
    'datepicker' : '/assets/plugins/bootstrap-datepicker'

   },

  'shim' : {
    'backbone' : {
      'deps' : ['underscore', 'jquery'],
      'exports' : 'Backbone'
    },
    'bootstrap' : ['jquery'],
    'backbone.paginator' : ['backbone'],
    'backbone.stickit' : ['backbone'],
    'jasmine-jquery' : ['jquery'],
    'datepicker' : ['jquery'],
    'underscore' : {
      'exports' : '_'
    },
    'marionette' : ['backbone']
    }

});
