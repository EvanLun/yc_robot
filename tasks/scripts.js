import gulp from 'gulp';
import gulpif from 'gulp-if';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';
import del from 'del';

gulp.task('scripts',()=>{
  return gulp.src(['ui-frontend/scripts/index.js'])
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(rename({
      basename:'script',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest('src/public/scripts'))
    .pipe(gulpif(args.watch,livereload()))
})
