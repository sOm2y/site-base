module.exports = {
	options: {
		includePaths: require('node-bourbon').includePaths
	},
	dev: {
		files: {
			'css/site.css': 'sass/site.scss'
		},
		options: {
			sourceComments: 'map',
			sourceMap: 'css/site.css.map'
		}
	},
	prod: {
		files: {
			'css/site.css': 'sass/site.scss'
		},
		options: {
			outputStyle: 'compressed'
		}
	}
}