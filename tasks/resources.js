import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';
import tiny from 'gulp-tinypng-nokey';

gulp.task('resources',()=>{
  return gulp.src('ui-frontend/resources/**')
    .pipe(tiny())
    .pipe(gulp.dest('src/public/resources/'))
    .pipe(gulpif(args.watch,livereload()))
})
