module.exports = function(grunt) {

  var connect = require('connect');

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress : true,
          yuicompress : true,
          optimization : 2
        },
        files : {
          'assets/stylesheets/style.css' : 'assets/less/style.less',
          'assets/stylesheets/bootstrap.css' : 'assets/less/bootstrap.less',
          'assets/stylesheets/datepicker.css' : 'assets/less/datepicker.less'
        }
      }
    },
    watch: {
      styles : {
        files : ['assets/less/*.less'],
        tasks : ['less'],
        options: {
          nospawn : true
        }
      },
      js : {
          files : ['app/**/*.js', 'test/spec/**/*.js'],
          tasks : ['jasmine:taskName:build']
      }
    },
    jasmine: {
      taskName: {
          src: 'app/**/*.js',
          options: {
              specs: 'test/spec/**/*.spec.js',
              helpers: 'test/spec/*Helper.js',
              host: 'http://127.0.0.1:8000/',
              template: require('grunt-template-jasmine-requirejs'),
              templateOptions: {
                  requireConfigFile: 'app/config.js',
                  requireConfig : {
                      'deps' : ['main'],
                      'baseUrl' : 'app',
                      'paths' : {
                          'libs' : '/assets/libs',
                          'plugins' : '/assets/plugins',
                          'underscore' : '/assets/libs/underscore',

                          'jquery' : '/assets/libs/jquery',
                          'backbone' : '/assets/libs/backbone',
                          'marionette' : '/assets/libs/marionette',
                          'backbone.wreqr' : '/assets/libs/backbone.wreqr',
                          'backbone.babysitter' : '/assets/libs/backbone.babysitter',
                          'jasmine-jquery' : '/assets/libs/jasmine-jquery',
                          'backbone.paginator' : '/assets/plugins/backbone.paginator',
                          'backbone.stickit' : '/assets/plugins/backbone.stickit',
                          'datepicker' : '/assets/plugins/bootstrap-datepicker'
                  }
              }
          }
      }
    }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('connect', function () {
    grunt.log.writeln('Starting static web server on port 8001');
    connect(connect.static('../document_upload')).listen(8001);
  });

  grunt.registerTask('default', ['less', 'connect', 'watch']);


};
