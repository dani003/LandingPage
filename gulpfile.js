const  gulp = require('gulp');
const  browserSync = require('browser-sync').create();
var reload= browserSync.reload;

gulp.task('browser-sync', function(){
  browserSync.init({
    server: "./"
  })
} );

gulp.task('css', function() {
  gulp.src('./css/**/*.css')
    .pipe(minify())
    .pipe(gulp.dest('./css/main.css'));
});

gulp.task('watch', ["browser-sync"], () =>{
      gulp.watch("./css/**/*.css", ['css']);
      gulp.watch("./*.html").on('change', browserSync.reload);

});


gulp.task('default', ["browser-sync", "watch"]);
