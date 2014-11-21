/* jshint strict:false */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var useref = require('gulp-useref');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var wrap = require('gulp-wrap');
var concat = require('gulp-concat');
var declare = require('gulp-declare');
var handlebars = require('gulp-handlebars');


var dist = 'dist/';
var src = 'src/';
var tmp = '.tmp/';

/** NB trailing slashes on all paths */
var config = {
  dist: dist,
  src: src,
  tmp: {
    root: tmp,
    css:  tmp + 'css/',
    js: tmp + 'js/'
  },
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
    glob: '**/*.html'
  },
  hbs: {
    src: src + 'hbs/',
    glob: '**/*.hbs'
  },
  extras: {
    glob: [src + '*', '!*/bower_components', '!*/js', '!*/scss', '!*/hbs', '!*.html']
  },
  img: {
    dist: dist + 'img/',
    src: src + 'img/',
    glob: '**/*.{gif,jpg,jpeg,png,svg}'
  }
};


gulp.task('clean', function(cb) {
  require('del')([config.dist, config.tmp.root], cb);
});


gulp.task('js', function() {
  return gulp.src(config.js.src + config.js.glob)
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('css', function() {
  return sass(config.css.src)
  .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
  .pipe(autoprefixer())
  .pipe(gulp.dest(config.tmp.css))
  .pipe(reload({ stream: true }));
});


gulp.task('html', function() {
  var assets = useref.assets({ searchPath: '{' + config.tmp.root + ',' + config.src + '}' });

  return gulp.src(config.src + config.html.glob)
  .pipe(assets)
  .pipe(assets.restore())
  .pipe(useref())
  .pipe(gulp.dest(config.dist));
});


gulp.task('hbs', function() {
  gulp.src(config.hbs.src + config.hbs.glob)
    .pipe(handlebars({ handlebars: require('ember-handlebars') }))
    .pipe(wrap('Ember.Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'Ember.TEMPLATES',
      noRedeclare: true,
      processName: function(filePath) {
        // return declare.processNameByPath(filePath.replace(config.hbs.src, ''));
        return declare.processNameByPath(filePath).split('.').slice(config.hbs.src.split('/').length-1).join('/');
      }
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(config.tmp.js));
});


gulp.task('extras', function() {
  return gulp.src(config.extras.glob)
  .pipe(gulp.dest(config.dist));
});


gulp.task('images', function() {
  return gulp.src(config.img.src + config.img.blob)
  .pipe(imagemin())
  .pipe(gulp.dest(config.img.dist));
});


gulp.task('browser-sync', function() {
  browserSync({
    server: { baseDir: config.dist }
  });
});


gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(config.js.src + config.js.glob, ['js', 'html', reload]);
  gulp.watch(config.css.src + config.css.glob, ['css']);
  gulp.watch(config.html.src + config.html.glob, ['html', reload]);
});


gulp.task('dist', function(cb) {
  require('run-sequence')('clean',
                         ['hbs', 'js', 'css', 'extras', 'images'],
                         'html',
                         cb);
});
gulp.task('default', ['dist']);
