// include gulp
var gulp = require('gulp'); 

// include plug-ins
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

// JS task
gulp.task('js', function() {
  return gulp.src('./public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/min'));
});

// CSS task
gulp.task('css', function () {
  gulp.src('./public/styles/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('./public/styles/min'));
});

// watch for JS changes
gulp.watch('./public/js/*.js', function() {
	gulp.run('default');
});

// default gulp task
gulp.task('default', ['js', 'css'], function() {
});