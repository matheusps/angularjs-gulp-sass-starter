var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var bulkSass = require('gulp-sass-bulk-import');

var paths = {
    sass: ['./app/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
    gulp.src('./app/assets/sass/main.scss')
        .pipe(bulkSass())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./app/assets/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./app/assets/css/release/'))
        .on('end', done);
});

gulp.task('watch-sass', function() {
    gulp.watch(paths.sass, ['sass']);
});