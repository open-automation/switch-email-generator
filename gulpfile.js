var gulp = require('gulp');
var jade = require('gulp-jade');

var paths = {
    emails: ['./src/emails/**/*.jade', './src/example_emails/**/*.jade'],
    view: './src/view/**/*.jade'
};

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src(paths.emails)
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dist/'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.emails, ['templates']);
    gulp.watch(paths.view, ['templates']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['templates', 'watch']);