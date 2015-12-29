var gulp = require('gulp')
    sass = require('gulp-sass');

var src = "./angular-material-sass.scss";
var dist = './';


gulp.task('styles', function(){
  gulp.src(src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(dist))
})

gulp.task('default', ['styles']);