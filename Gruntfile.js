module.exports = function(grunt) {

	// Load Grunt tasks declared in the package.json file
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jsFiles: ['js/**/*.js', '!js/*.min.js', '!js/vendor/*', '!js/source-map.js'],
		jshint: {
			files: ['js/**/*.js', '!js/**/*.min.js', '!js/plugin/external/*.js'],
			options: {
				boss: true,
				camelcase: true,
				curly: true,
				eqeqeq: true,
				eqnull: true,
				newcap: true,
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/src/',
					src: ['**/*.{png,jpg,jpeg,gif}'],
					dest: 'img/'
				}]
			}
		},
		notify: {
			build: {
				options: {
					title: "Summer of Dev Bot",
					message: 'Build a success!'
				}
			}
		},
		sass: {
			options: {
				loadPath: require('node-bourbon').includePaths,
				quiet: true
			},
			dev: {
				files: {
					'css/site.css': 'sass/site.scss'
				},
				options: {
					debugInfo: true,
					lineNumbers: true,
					sourcemap: true,
					trace: true
				},
			},
			prod: {
				files: {
					'css/site.css': 'sass/site.scss'
				},
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
					style: 'compressed'
				}
			}
		},
		svgmin: {
			options: {
				plugins: [{
					removeViewBox: false
				}]
			},
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/src/',
					src: ['**/*.svg'],
					dest: 'img/'
				}]
			}
		},
		todos: {
			console: {
				src: ['**/*.{html,php}', '!node_modules/**/*'],
				options: {
					verbose: false
				}
			},
			
		},
		uglify: {
			dev: {
				files: {
					'js/site.min.js': '<%= jsFiles %>'
				},
				options: {
					beautify: true,
					compress: false,
					mangle: false,
					preserveComments: 'all',
					sourceMap: function (path) { // Workaround
						return path.replace(/js\/(.*).min.js/, "$1.map.js");
					},
					sourceMappingURL: function (path) { // Workaround
						return path.replace(/js\/(.*).min.js/, "../../$1.map.js");
					},
				}
			},
			prod: {
				files: {
					'js/site.min.js': '<%= jsFiles %>'
				},
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
					global_defs: {
						"DEBUG": false
					},
					preserveComments: false
				}
			}
		},
		watch: {
			options: {
				dateFormat: function(time) {
					grunt.log.writeln(String('Completed in ' + time.toFixed(3) + 's on ' + (new Date()).toString()).cyan);
					grunt.log.write('Waiting for more awesomeness...');
				},
			},
			js: {
				files: ['js/**/*.js', '!js/*.min.js'],
				tasks: ['jshint', 'uglify:dev']
			},
			livereload: {
				files: ['css/*.css', 'js/*.min.js', 'img/**/*', '!img/src/*', '**/*.{html,php}'],
				options: { livereload: true }
			},
			sass: {
				files: ['sass/**/*.scss'],
				tasks: ['sass:dev']
			},
			css: {
				files: ['*.css']
			},
			img: {
				files: ['img/src/*'],
				tasks: ['imagemin', 'svgmin']
			}
		}
	});


	// Default tasks
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['uglify:prod', 'sass:prod', 'notify:build', 'todos:console']);

};