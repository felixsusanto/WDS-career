// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function(grunt) {
 
  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
  // Configure Grunt 
  grunt.initConfig({
    
    //grunt-contrib-compass to compile scss file to dist files
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: '_sass',
          cssDir: 'css',
          environment: 'production'
        }
      }
    },

    shell: {
      jekyllServe:{
        command: "jekyll serve --baseurl ''"
      },
      jekyllBuild:{
        command: 'jekyll build --config _config-dev.yml'
      }
    },

    //grunt-watch will monitor the project files
    watch: {
      options:{
        livereload: true
      },
      site: {
        files: ['**/*.html', 'index.html', '!_site/**/*'],
        tasks: ['shell:jekyllBuild'],
      },
      css: {
        files: ['_sass/*.scss', '!_site/**/*'],
        tasks: ['compass', 'shell:jekyllBuild'],
      }
    },
    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:4000/index.html'
      }
    }
  });
 
  // Creates the `server` task
  grunt.registerTask('serve', ['shell:jekyllServe']);
  //Compile scss task
  grunt.registerTask('default', ['compass', 'shell:jekyllBuild','open', 'watch']);
};