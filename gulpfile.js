var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'src'
    }
  });

  gulp.watch(['**/*.css', '**/*.js', '**/*.html'], {cwd: 'src'}, reload);
});

gulp.task('default', ['serve'], function(){

});