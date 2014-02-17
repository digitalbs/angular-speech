/*global require:false*/
module.exports = function (grunt) {
    "use strict";

    var plugins = [
        'grunt-bower-task',
        'grunt-contrib-concat',
        'grunt-contrib-uglify',
        'grunt-contrib-copy',
        'grunt-contrib-clean',
        'grunt-contrib-watch',
        'grunt-karma',
        'grunt-contrib-connect',
        'grunt-open',
        'grunt-contrib-yuidoc',
        'grunt-concurrent'
    ];

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            exports: 'exports',
            source: 'src',
            examples: 'examples'
        },
        bower: {
            install: {
                options: {
                    targetDir: "./src/vendor",
                    cleanup: true,
                    layout: "byComponent"
                }
            }
        },
        clean: {
            options: {
                force: true
            },
            build: '<%= dirs.exports %>/*'
        },
        copy: {
            deploy: {
                src: '<%= dirs.source %>/speech.js',
                dest: '<%= dirs.exports %>/speech.js'
            },
            codeCoverage: {
                src: '<%= dirs.exports %>/cobertura/**/coverage.xml',
                dest: '<%= dirs.exports %>/cobertura/coverage.xml'
            }
        },
        watch: {
            js: {
                files: ['<%= dirs.source %>/*.js']
            },
            options: {
                livereload: true
            }
        },
        karma: {
            watch: {
                configFile: 'karma.conf.js',
                runnerPort: 9876,
                autoWatch: true
            }
        },
        concurrent: {
            dev: {
                tasks: ["connect:server", "open:example"],
                options: {
                    limit: 4,
                    logConcurrentOutput: true
                }
            }
        },
        open: {
            example:{
                path:'http://localhost:8000/examples',
                app:'Google Chrome'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: './',
                    keepalive: true
                }
            }
        },
        yuidoc: {
            compile: {
                name: 'Angular Speech',
                description: 'Angular speech service/factory to support speech synthesis.',
                version: '0.0.0',
                options: {
                    paths: 'src/',
                    outdir: 'docs/'
                }
            }
        }
    };


    grunt.initConfig(gruntConfig);

    //load in all grunt plugins added in the array at the top of the config
    for (var i = 0; i < plugins.length; i++) {
        grunt.loadNpmTasks(plugins[i]);
    }

    /**
     *  Default task
     *
     **/

    grunt.registerTask('default', ['develop']);

    grunt.registerTask('deploy', [
        'clean',
        'copy:deploy'
    ]);


    grunt.registerTask('develop', [
        'clean',
        'copy:deploy',
        'karma'
    ]);

    grunt.registerTask('examples', [
        'clean',
        'copy:deploy',
        'concurrent:dev'
    ]);
};
