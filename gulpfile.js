// include gulp
var gulp = require('gulp'); 

// include plug-ins
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

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

// IMAGES
gulp.task('img', function () {
	return gulp.src('./public/images/banner/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./public/images/banner/min'));
});

// watch for JS changes
gulp.watch('./public', function() {
	gulp.run('default');
});

// default gulp task
gulp.task('default', ['js', 'css', 'img'], function() {
});