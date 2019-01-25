var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var browserSync = require('browser-sync');
const server = browserSync.create();
 
var paths = {
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'assets/styles/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'assets/scripts/'
  },
  html: {
    src: 'src/index.html',
    dest: 'assets/'
  },
  images: {
    src: 'src/img/**.*',
    dest: 'assets/img/'
  }
};
 
/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'assets' ]);
}

function reload(done) {
  server.reload();
  done();
}


function serve(done) {
  server.init({
    server: {
      baseDir: './assets/'
    }
  });
  done();
}
 
/*
 * Define our tasks using plain functions
 */
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
}

function copyHTML() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest));
}

function copyImages() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
}
 
function watch() {
  gulp.watch(paths.styles.src, gulp.parallel([styles, reload, copyHTML]));
  gulp.watch(paths.html.src, gulp.parallel([copyHTML, reload]));
}
 
/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.watch = watch;
 
/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, copyHTML, copyImages, serve, gulp.parallel([styles, watch]));
 
/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);
 
/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);