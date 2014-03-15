module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    distdir: 'phonegap/www',

    src: {
      vendor: [
        'node_modules/ionic/release/js/ionic.bundle.js',
        'node_modules/moment/moment.js'
      ],
      js: [
        'client/**/!(*spec).js'
      ],
      // can only compile one SASS file
      sass: [
        'client/common/scss/index.scss'
      ],
      // all page-specific css overrides
      css: [
        'client/app/**/*.css'
      ],
      tpl: {
        app: ['client/app/**/*.tpl.html'],
        common: ['client/common/**/*.tpl.html']
      },
      // templates after they have been compiled to javascript:
      jsTpl: [
        '<%= distdir %>/templates/**/*.js'
      ],
      specs: [
        'test/**/*.spec.js'
      ],
      scenarios: [
        'test/**/*.scenario.js'
      ],
      // main file that will be read as index.html by ionic
      html: [
        'client/app/frankie.html'
      ]
    },

    pkg: grunt.file.readJSON('package.json'),

    banner:
    '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
    ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
    ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',

    clean: ['<%= distdir %>/*'],

    concat:{
      js:{
        options: {
          banner: "<%= banner %>"
        },
        src:['<%= src.vendor %>', '<%= src.js %>', '<%= src.jsTpl %>'],
        dest:'<%= distdir %>/<%= pkg.name %>.js'
      },
      index: {
        src: '<%= src.html %>',
        dest: '<%= distdir %>/index.html',
        options: {
          process: true
        }
      },
      css: {
        src: ['<%= sass.compile.dest %>','<%= src.css %>'],
        dest: '<%= sass.compile.dest %>',
        options: {
          process: true
        }
      }
    },

    copy: {
      assets: {
        files: [
          {
            dest: '<%= distdir %>/assets',
            src : '**',
            expand: true,
            cwd: 'client/common/assets'
          }
        ]
      },
      phonegap: {
        files: [
          {
            dest: '<%= distdir %>',
            src : ['res/**'],
            expand: true,
            cwd: 'client/'
          },
          {
            dest: '<%= distdir %>',
            src : ['fonts/**'],
            expand: true,
            cwd: 'node_modules/ionic/release/'
          },
          {
            dest: '<%= distdir %>',
            src : ['config.xml'],
            expand: true,
            cwd: 'client/'
          }
        ]
      }
    },

    html2js: {
      app: {
        options: {
          base: 'client/app'
        },
        src: ['<%= src.tpl.app %>'],
        dest: '<%= distdir %>/templates/app.js',
        module: 'templates.app'
      },
      common: {
        options: {
          base: 'client/common'
        },
        src: ['<%= src.tpl.common %>'],
        dest: '<%= distdir %>/templates/common.js',
        module: 'templates.common'
      }
    },

    jshint:{
      files:['Gruntfile.js', '<%= src.js %>', '<%= src.jsTpl %>', '<%= src.specs %>', '<%= src.scenarios %>'],
      options:{
        curly:true,
        eqeqeq:true,
        immed:true,
        latedef:true,
        newcap:true,
        noarg:true,
        sub:true,
        boss:true,
        eqnull:true,
        globals:{}
      }
    },

    karma: {
      options: {
        configFile: 'test/client/karma.conf.js',
      },
      continuous: {
        singleRun: true,
      },
      // coverage report generated in root directory
      coverage: {
        reporters: ['coverage'],
      },
      watch: {
        autoWatch: true,
        singleRun: false
      },
      debug: {
        autoWatch: true,
        singleRun: false,
        browsers: ['Chrome']
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'dot',
          require: ['./test/api/bootstrap']
        },
        src: ['test/api/**/*.spec.js']
      }
    },

    protractor: {
      all: {
        options: {
          configFile: "test/e2e/e2e.conf.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      },
    },

    // Follow instructions https://github.com/angular/protractor to install selenium web driver
    protractor_webdriver: {
      main: {
        options: {
          command: 'webdriver-manager start',
        },
      },
    },

    sass: {
      compile: {
        src: '<%= src.sass %>',
        dest: '<%= distdir %>/<%= pkg.name %>.css'
      }
    },

    uglify: {
      dist:{
        options: {
          banner: "<%= banner %>"
        },
        src:['<%= src.js %>' ,'<%= src.jsTpl %>'],
        dest:'<%= distdir %>/<%= pkg.name %>.js'
      }
    },

    watch:{
      all: {
        files:['client/**', 'Gruntfile.js'],
        tasks:['default','timestamp']
      },
      build: {
        files:['client/**', 'Gruntfile.js'],
        tasks:['build','timestamp']
      }
    }
  });
  
  // Print a timestamp (useful for when watching)
  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });


  grunt.registerTask('default', ['build','test']);
  grunt.registerTask('test', ['karma:continuous', 'mochaTest']);
  grunt.registerTask('e2e', ['protractor_webdriver', 'protractor']);
  grunt.registerTask('build', ['clean','html2js','sass','concat','copy']);
};
