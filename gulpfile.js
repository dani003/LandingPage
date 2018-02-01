const  gulp = require('gulp');
const  browserSync = require('browser-sync').create();
var reload= browserSync.reload;

gulp.task('browser-sync', function(){
  browserSync.init({
    server: "./dist/"
  })
} );

gulp.task('css', function() {
  gulp.src('./css/**/*.css')
    .pipe(minify())
    .pipe(gulp.dest('./css/estilos.css'));
});

gulp.task('watch', ["browser-sync"], () =>{
      gulp.watch("./css/estilos.css", ['css']);
      gulp.watch("./dist/*.html").on('change', browserSync.reload);

});


gulp.task('default', ["browser-sync", "watch"]);
