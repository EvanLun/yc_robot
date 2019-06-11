import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{
  return gulp.src('ui-frontend/**/*.css')
    .pipe(gulp.dest('src/public'))
    .pipe(gulpif(args.watch,livereload()))
})