var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    minify_css = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync');

//DIST - SRC -------------------------------------------------------
var dist_js = 'js/';
var dist_css = 'dist/';
var dist_img = 'dist/img';

var src_sass = 'scss/**/*.scss';
var src_js = 'js/**/*.js';
var src_img = 'img/*';

//SASS TO CSS ------------------------------------------------------
gulp.task('sass', function () {
  return sass(src_sass)
    .on('error', sass.logError)
    .pipe(plumber())
    .pipe(autoprefixer('last 50 versions'))
    // .pipe(minify_css())
    .pipe(gulp.dest(dist_css))
    .pipe(notify({message: 'Sass saved! Reloading...'}))
    .pipe(browserSync.reload({stream: true}));
});

//JS --------------------------------------------------------------
gulp.task('js', function(){
  return gulp.src(src_js)
  .pipe(plumber())
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  // .pipe(uglify())
  .pipe(gulp.dest(dist_js))
  .pipe(notify({message: 'JS saved! Reloading...'}))
  .pipe(browserSync.reload({stream: true}));
});

//Watch --------------------------------------------------------------

gulp.task('watch', function(){
  browserSync.init({
    proxy: 'tomek-u36sg/pepsi/'
  });
  gulp.watch(src_js, ['js']);
  gulp.watch(src_sass, ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
});


//--------------------------------------------------------------

gulp.task('default', ['watch', 'sass', 'js']);
