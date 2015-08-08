module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            build: {
                files: {
                    "build/style.css": "style/**.less"
                }
            }
        },
        watch: {
            styles: {
                files: ['style/**.less'],
                tasks: ['less'],
            },
            partials: {
              files: ['partials/index.jade'],
              tasks: ['jade']
            }
        },
        browserSync: {
          dev: {
            bsFiles: {src: [
              './build/index.html',
              './build/style.css',
            ]},
            options: {
              watchTask: true,
              debugInfo: true,
              logConnections: true,
              server: {baseDir: 'build/'},
              notify: true
            }
          }
        },
        jade: {
          compile: {
            files: {
              'build/index.html':
                ['partials/index.jade']
            }
          }
        }
    });

    grunt.registerTask('default',
      ['less', 'jade', 'browserSync',
        'watch']);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-browser-sync');
};
