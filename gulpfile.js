var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var postcss = require( 'gulp-postcss' );
var autoprefixer = require( 'autoprefixer' );
var browserSync = require( 'browser-sync' );

gulp.task( 'serve', [ 'default' ], function() {
  browserSync.init({
    server: './',
    ghostMode: false
  });

  gulp.watch( 'scss/**/*.scss', [ 'styles' ] );
});

gulp.task( 'styles', function() {
  gulp.src( 'scss/main.scss' )
    .pipe( sass({
        includePaths: [ 'node_modules' ],
        outputStyle: 'expanded'  // expanded for development
      })
      .on( 'error', sass.logError ))
    .pipe( postcss([
      autoprefixer({
        browsers: [ 'last 2 versions' ]
      })
    ]))
    .pipe( gulp.dest( 'dist/css/' ) )
    .pipe( browserSync.stream() );
});

gulp.task( 'default', [ 'styles' ] );
