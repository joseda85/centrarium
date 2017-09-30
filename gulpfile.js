// Dependencias
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Tarea 1 llamada minify-js
gulp.task('js', function () {
  gulp.src('_js/*.js')
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('js/'));
});
