module.exports = {
	dev: {
		files: {
			'js/site.min.js': ['js/**/*.js', '!js/*.min.js', '!js/vendor/*']
		},
		options: {
			beautify: true,
			compress: false,
			mangle: false,
			preserveComments: 'all',
			sourceMap: true
		}
	},
	prod: {
		files: {
			'js/site.min.js': ['js/**/*.js', '!js/*.min.js', '!js/vendor/*']
		},
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			global_defs: {
				"DEBUG": false
			},
			preserveComments: false
		}
	}
}