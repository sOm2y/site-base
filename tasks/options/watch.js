module.exports = {
	sass: {
		files: ['sass/*.scss'],
		tasks: ['sass:dev']
	},
	scripts: {
		files: ['js/*.js'],
		tasks: ['jshint', 'uglify:dev']
	},
	images: {
		files: ['img/**/*.{png,jpg,jpeg,gif}', 'img/*.{png,jpg,jpeg,gif}'],
		tasks: ['imagemin']
	},
	svg: {
		files: ['img/**/*.svg', 'img/*.svg'],
		tasks: ['svgmin']
	},
	livereload: {
		options: { livereload: true },
		files: ['./css/site.css', './js/site.min.js', './img/**/*']
	}
}