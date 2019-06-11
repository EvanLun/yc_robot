import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
  return gulp.src('ui-frontend/**/*.ejs')
    .pipe(gulp.dest('src/public'))
    .pipe(gulpif(args.watch,livereload()))
})
