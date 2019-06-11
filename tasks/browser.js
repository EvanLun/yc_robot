import gulp from 'gulp';
import args from './util/args';

gulp.task('browser',(cb)=>{
  if(!args.watch) return cb();
  gulp.watch('ui-frontend/**/*.js',['scripts']);
  gulp.watch('ui-frontend/**/*.ejs',['pages']);
  gulp.watch('ui-frontend/**/*.css',['css']);
  gulp.watch('ui-frontend/resources/**',['resources']);
});