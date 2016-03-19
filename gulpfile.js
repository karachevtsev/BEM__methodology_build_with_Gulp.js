var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

var params = {
    out: 'public/',
    htmlSrc: 'index.pink.html',
    levels: ['pink.blocks','common.blocks']
};

gulp.task('default', ['server', 'build']);

gulp.task('build', ['html', 'css']);

gulp.task('server', function() {
    browserSync.init({
        server: params.out
    });

    gulp.watch('*.html', ['html', 'css']);

});

gulp.task('html', function() {
    gulp.src(params.htmlSrc)
    .pipe(rename('index.html'))
    .pipe(gulp.dest(params.out))
    .pipe(reload({ stream: true }));
});

gulp.task('css', function() {
    gulp.src(['common.blocks/**/*.css', 'pink.blocks/**/*.css'])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(params.out))
    .pipe(reload({ stream: true }));
});