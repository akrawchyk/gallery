/* jshint strict:false */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var useref = require('gulp-useref');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

var dist = 'dist/';
var src = 'src/';

/** NB trailing slashes on all paths */
var config = {
  dist: dist,
  src: src,
  js: {
    dist: dist + 'js/',
    src: src + 'js/',
    glob: '**/*.js'
  },
  css: {
    dist: dist + 'css/',
    src: src + 'scss/',
    glob: '**/*.scss'
  },
  html: {
    src: src + 'html/',
    glob: '**/*.html'
  },
  extras: {
    glob: [src + '*', '!*/bower_components', '!*/js', '!*/scss', '!*/html']
  },

  rubySass: {
    loadPath: src + 'bower_components/foundation/scss/'
  }
};


gulp.task('clean', function(cb) {
  require('del')([config.dist], cb);
});


gulp.task('js', function() {
  return gulp.src(config.js.src + config.js.glob)
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('browserify', function () {

});


gulp.task('css', function() {
  return gulp.src(config.css.src + config.css.glob)
  .pipe(sass(config.rubySass))
  .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
  .pipe(gulp.dest(config.css.dist))
  .pipe(reload({ stream: true }));
});


gulp.task('html', function() {
  var assets = useref.assets({ searchPath: '{' +config.dist+ ',' + config.src + '}' });

  return gulp.src(config.html.src + config.html.glob)
  .pipe(assets)
  .pipe(assets.restore())
  .pipe(useref())
  .pipe(gulp.dest(config.dist));
});


gulp.task('extras', function() {
  return gulp.src(config.extras.glob)
  .pipe(gulp.dest(config.dist));
});


gulp.task('browser-sync', function() {
  browserSync({
    server: { baseDir: config.dist }
  });
});


gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(config.js.src + config.js.glob, ['js', reload]);
  gulp.watch(config.html.src + config.html.glob, ['html', reload]);
});


gulp.task('dist', function(cb) {
  require('run-sequence')('clean',
                         ['js', 'css', 'extras'],
                         'html',
                         cb);
});
gulp.task('default', ['dist']);
