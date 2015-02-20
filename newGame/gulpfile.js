// Load plugins
var gulp = require('gulp'), // This streaming build system
    browserSync = require('browser-sync'), // Server & live reload system
    reload = browserSync.reload, // Ensure the event emitter is set
    addsrc = require('gulp-add-src'), // Add more source files after init
    stylus = require('gulp-stylus'), // CSS Pre-processor
    
      ks = require('kouto-swiss'),
    
    nib = require('nib'), // Plugin for Stylus
    jade = require('gulp-jade'), // Template language for HTML5
    rename = require('gulp-rename'), // Change filenames
    notify = require('gulp-notify'), // Give notification on updates
    to5 = require('gulp-6to5'), // 6to5 ECMAScript transpiler
    concat = require('gulp-concat'), // Concatenate files together
    minifycss = require('gulp-minify-css'), // Make css smaller and more digestable
    minifyjs = require('gulp-uglify'), // Make js smaller and more digestable
    jshint = require('gulp-jshint'), // Linter for javascript
    stylish = require('jshint-stylish'); // Makes jshints output pretty

// Resources - ensure root resources are moved to dist
gulp.task('resources',function(){
  gulp.src('src/*')
    .pipe(gulp.dest('dist/'));
}); //end 'resources' task

// Styles - pre-process all styles and push the css to dist
gulp.task('styles', function(){
  gulp.src('src/styles/*.styl')
    .pipe(concat('app.styl'))
    .pipe(stylus({
      
      use: ks(),
      
      compress: true
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Stylus finished compiling to <%= file.relative %>.' }));
}); //end 'styles' task

// Jade - convert Jade to HTML
gulp.task('jade', function(){
  gulp.src('src/views/*.jade')
    .pipe(jade()) //compressed
    .pipe(gulp.dest('dist/'))
    .pipe(notify({ message: 'Jade finished compiling to <%= file.relative %>.' }));
}); //end 'jade' task

// Scripts - concatenate & Minify Javascript
gulp.task('scripts', function(){
  // Runtime Scripts
  gulp.src([
    'src/scripts/common/*.js'
  ])
    .pipe(jshint({ esnext: true }))
    .pipe(jshint.reporter(stylish))
    .pipe(to5({ blacklist: ["useStrict"] }))
    .pipe(addsrc([
      'src/scripts/lib/*.js',
      'src/scripts/vendor/*.js'
    ]))
    .pipe(concat('runtime.js'))
    .pipe(rename({suffix: '.min'}))
    //.pipe(minifyjs())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Script <%= file.relative %> complete.' }));

  // Entry script app.js [Executes runtime]
  gulp.src('src/scripts/app.js')
    .pipe(jshint({ esnext: true }))
    .pipe(jshint.reporter(stylish))
    .pipe(to5({ blacklist: ['useStrict'] }))
    .pipe(rename({ suffix: '.min'}))
    .pipe(minifyjs())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Script <%= file.relative %> complete.' }));
}); //end 'scripts' task

// The browser-sync task will start a server but not watch any files.
gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir: 'dist/'
    }
  });
}); //end 'browser-sync' task

// Watch
gulp.task('watch', ['browser-sync'], function(){
  // Watch resource files
  gulp.watch('src/*',['resources', reload]);

  // Watch stylus files
  gulp.watch('src/styles/**/*.styl', ['styles', reload]);

  // Watch javascript files
  gulp.watch('src/scripts/**/*.js', ['scripts', reload]);

  // Watch jade files
  gulp.watch('src/templates/**/*.jade', ['jade', reload]);
}); //end 'watch' task

// Default Task
gulp.task('default', ['resources','styles','scripts','jade','watch']);