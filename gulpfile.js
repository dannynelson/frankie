var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./scss/ionic.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/lib/css'));
});

gulp.task('watch', function () {
  gulp.watch('scss/**', ['sass']);
});