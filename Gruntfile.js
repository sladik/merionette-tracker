module.exports = function (grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'assets/stylesheets/style.css': 'assets/less/style.less'
        }
      }
    },
    shell: {
      runServer: {
        options: {
          stdout: true
        },
        command: 'node ./app/server.js'
      }
    },
    watch: {
      styles: {
        files: ['assets/less/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('compile', ['less', 'watch']);


};
