var gulp = require('gulp');
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano');

gulp.task('css', function() {
  //gulp.src('./src/**/bootstrap-decorator.css')
  gulp.src('./src/**/*.css')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('./'));
});