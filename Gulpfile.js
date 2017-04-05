const Gulp   = require('gulp');  

const livereload = require('gulp-livereload');
const connect = require('gulp-connect');


Gulp.task('connect', function() {
    connect.server({
        name: 'Dist App',
        root: 'public',
        port: 9001,
        livereload: true
    });
});
