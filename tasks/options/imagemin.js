module.exports = {
	dynamic: {
		files: [{
			expand: true,
			cwd: 'img/',
			src: ['**/*.{png,jpg,jpeg,gif}'],
			dest: 'img/'
		}]
	}
}