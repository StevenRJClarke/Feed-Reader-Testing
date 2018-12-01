/*eslint-env node */

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const jasmineBrowser = require('gulp-jasmine-browser');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('default', ['copy-html', 'scripts-dist', 'styles', 'lint'], function() {
  gulp.watch('app/sass/**/*.scss', ['styles']);
  gulp.watch('app/js/**/*.js', ['lint']);
  gulp.watch('app/index.html', ['copy-html']);
  gulp.watch('dist/index.html').on('change', browserSync.reload);

  browserSync.init({
    server: './dist'
  });
});

gulp.task('scripts', function() {
  gulp.src('app/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('scripts-dist', function() {
  gulp.src('app/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('lint', function() {
  return (
    gulp.src(['app/js/**/*.js'])
      // eslint() attaches the lint output to the eslint property
      // of the file object so it can be used by other modules.
      .pipe(eslint())
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(eslint.format())
      // To have the process exit with an error code (1) on
      // lint error, return the stream and pipe to failOnError last.
      // .pipe(eslint.failAfterError())
      );
});

gulp.task('copy-html', function() {
  gulp.src('app/index.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  gulp.src('app/sass/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.stream());
});

gulp.task('tests', function() {
  return gulp.src('test/spec/feedreader.js')
  .pipe(jasmineBrowser.specRunner({ console: true }))
  .pipe(jasmineBrowser.headless({ driver: 'chrome' }));
});