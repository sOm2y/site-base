module.exports = function(grunt) {
	grunt.registerTask('build', ['uglify:prod', 'sass:prod', 'imagemin', 'svgmin', 'notify:build']);
};