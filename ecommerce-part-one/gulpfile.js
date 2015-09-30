var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    watch   = require('gulp-watch'),
    jade    = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    paths = {
        jade: ['public/**/*.jade'],
        sass: ['public/styles/**/*.sass']
    };

gulp
    .task('sass', function(done) {
        gulp.src(paths.sass)
            .pipe(plumber())
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(gulp.dest('public'))
            .on('end', done);
    })

    .task('jade', function(done) {
        gulp.src(paths.jade)
            .pipe(plumber())
            .pipe(jade({compressed: true}))
            .pipe(gulp.dest('public'))
            .on('end', done);
    })
    .task('watch', function() {
        gulp.watch(paths.sass, ['sass']);
        gulp.watch(paths.jade, ['jade']);
    })
    .task('default', ['sass', 'jade', 'watch']);
