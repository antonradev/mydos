module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      options: {
        compress: false
      },
      dist: {
        files: [{
            expand: true,
            cwd: 'app/styl',
            src: ['{,**/}*.styl', '!{,**/}_*.styl'],
            dest: 'assets/css',
            ext: '.css'
          }]
      }
    },
    cssmin: {
      target: {
        files: [{
            expand: true,
            cwd: 'assets/css',
            src: ['*.css', '!*.min.css'],
            dest: 'assets/css',
            ext: '.min.css'
          }]
      }
    },
    uglify: {
      my_target: {
        src: 'app/**/*.js',
        dest: 'assets/js/main.min.js'
      }
    },
    watch: {
      styl: {
        files: ['src/styl/*.styl', '{,**/}*.styl'],
        tasks: ['stylus']
      },
      css: {
        files: ['assets/css/main.css'],
        tasks: ['cssmin']
      },
      scripts: {
        files: ['app/**/*.js'],
        tasks: ['uglify']
      }
    },
    jsdoc: {
      dist: {
        src: ['app/**/*.js'],
        options: {
          destination: 'doc'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-jsdoc');


  grunt.registerTask('default', ['stylus', 'uglify', 'cssmin', 'watch']);

};