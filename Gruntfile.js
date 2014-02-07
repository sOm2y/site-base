/*
	Created by Summer of Dev
	Version 1.2.0 - 07/02/2014
*/

module.exports = function(grunt) {

	// Utility to load the different option files based on their names
	function loadConfig(path) {
		var glob = require('glob'),
			object = {},
			key;

		glob.sync('*', {cwd: path}).forEach(function(option) {
			key = option.replace(/\.js$/,'');
			object[key] = require(path + option);
		});

		return object;
	}

	// Load initial config
	var config = {
		pkg: grunt.file.readJSON('package.json'),
		env: process.env
	};

	// Load tasks from files
	grunt.loadTasks('tasks');

	// Load task options from files
	grunt.util._.extend(config, loadConfig('./tasks/options/'));
	grunt.initConfig(config);

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);


	// Register default task
	grunt.registerTask('default', ['normal']);

};