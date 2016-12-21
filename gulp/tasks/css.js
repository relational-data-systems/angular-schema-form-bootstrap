var gulp = require('gulp');
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('css', function() {
  gulp.src('./src/**/*.css')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});