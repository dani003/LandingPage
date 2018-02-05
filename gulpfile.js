const  gulp = require('gulp');
const  browserSync = require('browser-sync').create();
var reload= browserSync.reload;

gulp.task('browser-sync', function(){
  browserSync.init({
    server: "./"
  })
} );

gulp.task('watch', ["browser-sync"], () =>{
      gulp.watch("./css/**/*.css").on('change', browserSync.reload);;
      gulp.watch("./*.html").on('change', browserSync.reload);

});


gulp.task('default', ["browser-sync", "watch"]);
