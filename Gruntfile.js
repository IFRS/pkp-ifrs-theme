module.exports = function(grunt) {
var target = grunt.option('target') || false;
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
        dist: {
            src: ['dist/'],
        },
        css: {
            src: ['ifrs-theme.css'],
        },
    },

    copy: {
        dist: {
            expand: true,
            cwd: '.',
            src: ['**', '!.**', '!node_modules/**', '!sass/**', '!Gruntfile.js', '!package.json'],
            dest: 'dist/',
        },
    },

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images/',
                src: ['*.{png,jpg,gif}'],
                dest: 'images/',
            }],
        },
    },

    postcss: {
        options: {
            map: true,
            processors: [
                require('pixrem')(), // add fallbacks for rem units
                require('autoprefixer')({browsers: '> 1%, last 2 versions'}), // add vendor prefixes
            ]
        },
        dist: {
            src: '*.css'
        }
    },

    rsync: {
        options: {
            args: ['-rLtvzh', '--stats', '--delete'],
        },
        prod: {
            options: {
                src: './dist/',
                dest: target,
            },
        },
    },

    sass: {
        dist: {
            options: {
                loadPath: 'sass',
                noCache: true,
                sourcemap: 'none',
                style: 'compressed'
            },
            files: [{
                expand: true,
                cwd: 'sass',
                src: ['*.scss'],
                dest: '.',
                ext: '.css'
            }]
        }
    },

    watch: {
        options: {
            livereload: true,
        },
        css: {
            files: 'sass/*.scss',
            tasks: ['css'],
        },
    },
});

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks("grunt-rsync");


    // Tasks
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('css', [
        'sass',
        'postcss'
    ]);
    grunt.registerTask('build', [
        'clean',
        'imagemin',
        'css'
    ]);
    grunt.registerTask('dist', [
        'build',
        'copy'
    ]);
    grunt.registerTask('deploy', ['rsync']);
};
