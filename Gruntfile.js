module.exports = function(grunt) {

	// Load Grunt tasks declared in the package.json file
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jsFiles: ['js/**/*.js', '!js/*.min.js', '!js/vendor/*', '!js/source-map.js'],
		compass: {
			options: {
				cssDir: 'css',
				fontsDir: 'font',
				imagesDir: 'img',
				raw: 'require \'sass-globbing\'\n',
				relativeAssets: true,
				sassDir: 'sass'
			},
			dev: {
				options: {
					//debugInfo: true,
					trace: true
				}
			},
			prod: {
				options: {
					boring: true,
					//clean: true,
					environment: 'production',
					noLineComments: true,
					outputStyle: 'compressed'
				}
			}
		},
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
					grunt.log.write('Waiting for more changes...');
				},
			},
			js: {
				files: ['js/**/*.js'],
				tasks: ['jshint', 'uglify:dev']
			},
			livereload: {
				options: { livereload: true },
				files: ['js/*.min.js', 'css/*.css', 'img/**/*', '!img/src/*', '**/*.{html,php}'],
			},
			css: {
				files: ['sass/**/*.scss'],
				tasks: ['compass:dev']
			},
			img: {
				files: ['img/src/*'],
				tasks: ['imagemin', 'svgmin']
			}
		}
	});


	// Default tasks
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['uglify:prod', 'compass:prod', 'notify:build']);

};