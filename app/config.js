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
    'backbone.stickit' : '/assets/plugins/backbone.stickit'

   },

  'shim' : {
    'backbone' : {
      'deps' : ['underscore', 'jquery'],
      'exports' : 'Backbone'
    },
    'backbone.stickit' : ['backbone'],
    'underscore' : {
      'exports' : '_'
    },
    'marionette' : ['backbone']
    }

});
