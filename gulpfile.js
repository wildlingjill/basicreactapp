var gulp = require('gulp');
var eslint = require('gulp-eslint');
var webpack = require('gulp-webpack');
var webpack_config = require('./webpack.config');

gulp.task('lint', function() {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['client/**/*.js', 'client/**/*.jsx', '!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task('webpack', function() {
  return gulp.src('./client/react_test.js')
    .pipe(webpack(webpack_config))
    .pipe(gulp.dest('dist/'));
});
