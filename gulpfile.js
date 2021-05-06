var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    prefix = require('gulp-autoprefixer'),
    spritesmith = require('gulp.spritesmith')

gulp.task('sprite', function() {
    var spriteData = gulp.src('/src/img/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('/dist/img'));
});

gulp.task('styles', function() {
    return gulp.src('/src/css/*.css')
        .pipe(concat('custom-style.css'))
        .pipe(minifyCSS())
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('/dist/css'))
});


gulp.task('default', function() {
    gulp.task('styles')
    gulp.watch('/src/css/*.css', function() {
        gulp.task('styles')
    })
});