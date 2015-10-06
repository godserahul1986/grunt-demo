module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['*.js'],
		  		dest: 'dist/<%= pkg.name %>.js'
			}
		},
		jshint: {
			files: ['*.js'],
			options: {
				globals: {
					jQuery: true,
					console: true
				}
			}
		},
		uglify: {
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js':['<%= concat.dist.dest %>']
				}
			}
		},
		clean: ['dist/']
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', [
		'clean',
		'concat',
		'jshint',
		'uglify'
	]);

	grunt.registerTask('cleancat', [
		'clean',
		'concat'
	]);
};
