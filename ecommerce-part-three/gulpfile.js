var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    jade    = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    watch   = require('gulp-watch'),
    paths = {
        jade: ['public/**/*.jade'],
        sass: ['public/styles/main.sass']
    };

gulp.task('jade', function(done) {
    gulp.src(paths.jade)
        .pipe(plumber())
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('public'))
        .on('end', done);
});

gulp.task('sass', function(done) {
    gulp.src(paths.sass)
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('public'))
        .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['public/styles/**/*.sass']);
    gulp.watch(paths.jade, ['jade']);
});

gulp.task('default', ['jade', 'sass', 'watch']);
