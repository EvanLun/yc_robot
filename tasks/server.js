import gulp from 'gulp';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('server',(cb)=>{
  if(!args.watch) return cb();

  var server = liveserver.new(['--harmony','src/bin/www']);
  server.start();
  gulp.watch(['src/public/**/*.js','src/public/pages/**/*.ejs'],function(file){
    server.notify.apply(server,[file]);
  })

  gulp.watch(['src/routes/**/*.js','src/app.js'],function(){
    server.start.bind(server)()
  });
})
