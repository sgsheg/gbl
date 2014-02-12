  //Gruntfile
    module.exports = function(grunt) {

    //Initializing the configuration object
      grunt.initConfig({

        // Task configuration
        concat: {
            options: {
              separator: ';',
            },
            js_frontend: {
              src: [
                './bower_components/jquery/jquery.min.js',
                './bower_components/bootstrap/js/dropdown.js',
                './app/assets/js/header.js'
              ],
              dest: './public/assets/js/header.js',
            },
            js_backend: {
                src: [
                  './bower_components/jquery/jquery.js',
                  './bower_components/bootstrap/dist/js/bootstrap.js',
                  './app/assets/js/backend.js'
                ],
                dest: './public/assets/js/backend.js',
            },
        },
        less: {
          development: {
            options: {
              compress: true,
            },
            files: {
              // compiling frontend.less into frontend.css
              "./public/assets/css/header.css":"./app/assets/css/header.less",
              "./public/assets/css/footer.css":"./app/assets/css/footer.less"
            }
          }
        },
        uglify: {
          options: {
            mangle: false   // Use if you want the names of your functions and variables unchanged
          },
          frontend: {
            files: {
              './public/assets/js/header.js': './public/assets/js/header.js',
            }
          },
          backend: {
            files: {
              './public/assets/js/backend.js': './public/assets/js/backend.js',
            }
          },
        },
        watch: {
          js_frontend: {
            files: [
              //watch files
              './bower_components/jquery/jquery.js',
              './bower_components/bootstrap/dist/js/bootstrap.js',
              './app/assets/js/header.js'
            ],
            tasks: ['concat:js_frontend', 'uglify:header'], // tasks to run
            options: {
              livereload: true
            }
          },
          js_backend: {
            files: [
            //watched files
            './bower_components/jquery/jquery.js',
            './bower_components/bootstrap/dist/js/bootstrap.js',
            './app/assets/js/footer.js'
            ],
            tasks: ['concat:js_backend','uglify:footer'],     //tasks to run
            options: {
              livereload: true                        //reloads the browser
            }
          },
          less: {
            files: ['./app/assets/css/*.less'], // watched files
            tasks: ['less'],
            options: {
              livereload: true
            }
          }
        }
      });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Task definition
    grunt.registerTask('default', ['watch']);
  };
