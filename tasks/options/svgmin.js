module.exports = {
	options: {
		plugins: [{
			removeViewBox: false
		}]
	},
	dynamic: {
		files: [{
			expand: true,
			cwd: 'img/',
			src: ['**/*.svg'],
			dest: 'img/'
		}]
	}
}