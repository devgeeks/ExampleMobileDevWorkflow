/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' + "\n" +
        ' * License: <%= _.pluck(pkg.licenses, "type").join(", ") %> (<%= _.pluck(pkg.licenses, "url").join(", ") %>)' + "\n" +
        ' */'
    },
    shell: {
      debug_ios: {
        command: 'cordova build ios && cordova emulate ios',
        stdout: true
      },
      debug_android: {
        command: 'cordova build android && cordova emulate android',
        stdout: true
      }
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js']
    },
    concat: {
      dist: {
        src: [
          '<banner:meta.banner>',
          'src/models/*.js',
          'src/collections/*.js',
          'src/views/*.js',
          'src/app.js'
        ],
        dest: 'www/js/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: [
          '<banner:meta.banner>',
          '<config:concat.dist.dest>'
        ],
        dest: 'www/js/<%= pkg.name %>.min.js'
      }
    },
    jasmine : {
      specs : 'www/spec/**/*.js',
      template : 'www/spec/SpecRunner.html'
    },
    'jasmine-server' : {
      browser : true
    },
    watch: {
      files: ['<config:lint.files>', 'www/spec/**/*.js'],
      tasks: 'lint concat jasmine'
    },
    jshint: {
      options: {
      eqeqeq: false,
      laxbreak: true,
      undef: true,
      newcap: true,
      noarg: true,
      strict: false,
      trailing: true,
      onecase: true,
      boss: true,
      eqnull: true,
      onevar: false,
      evil: true,
      regexdash: true,
      browser: true,
      wsh: true,
      sub: true
    },
      globals: {}
    },
    uglify: {}
  });

  grunt.loadNpmTasks('grunt-jasmine-runner');
  grunt.loadNpmTasks('grunt-shell');

  // Default task.
  grunt.registerTask('default', 'lint concat min jasmine');
  // Custom tasks
  grunt.registerTask('test', 'lint concat jasmine');
  grunt.registerTask('debug_ios', 'lint concat shell:debug_ios');
  grunt.registerTask('debug_android', 'lint concat shell:debug_android');

};
