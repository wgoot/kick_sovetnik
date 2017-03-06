module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: {
        options: {
          node: true,
          undef: true,
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true
        },
        files: {
          src: ['Gruntfile.js', 'src/*.js']
        }
      }
    },
    uglify: {
      options: {
        banner: '/*!\n * <%= pkg.name %> \n * <%= grunt.template.today() %>\n * <%= pkg.homepage %>\n */\n',
        footer: ';'
      },
      build: {
        src: 'src/index.js',
        dest: 'dist/index.min.js'
      }
    },
    copy: {
      all: {
        expand: true,
        src: 'index.js',
        cwd: 'src/',
        dest: 'dist/'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jshint', 'uglify', 'copy']);

};