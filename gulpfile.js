const gulp = require('gulp');
// Gulp dependencies go here
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function(){
    // Gulp task go here

    // Run ESLint
    gulp.src(["es6/**/*.js","public/es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());

    // Node source
    return gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
    // browser source
    return gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
});