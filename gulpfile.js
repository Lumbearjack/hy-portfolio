const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const historyApiFallback = require('connect-history-api-fallback');

gulp.task('bs', () => {
    browserSync.init({
        server: {
            baseDir: './'
        },
        middleware: [historyApiFallback()]
    });
});

gulp.task("styles", () => {
    return gulp.src("css/styles.css")
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat("build.css"))
    .pipe(gulp.dest("./css"))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['styles','bs'], () => {
    gulp.watch('src/**/*.js',['js']);
    gulp.watch('./css/styles.css',["styles"]);
});