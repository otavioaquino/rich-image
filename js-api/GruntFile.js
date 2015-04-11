module.exports = function(grunt) {

    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        clean: {
            all: ['dist']
        },

        copy: {
          js: {
              expand: true,
              cwd: 'sources/js',
              src: ['*.js'],
              dest: 'dist/js'
          }
        },

        watch : {
            build : {
                files: ['sources/**'],
                tasks: ['build']
            }
        }

    });

    grunt.registerTask('build', ['clean', 'copy:js']);
};
