module.exports = {
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
}