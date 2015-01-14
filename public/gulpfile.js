'use strict';

var gulp = require('gulp'),
    plugins     = require('gulp-load-plugins')({ lazy: false }),
    buffer      = require('vinyl-buffer'),
    source      = require('vinyl-source-stream'),
    watchify    = require('watchify'),
    runSequence = require('run-sequence'),
    del = require('del'),
    browserify = require('browserify'),
    gutil = plugins.util,
    pkg = require('./package.json'),
    argv = require('minimist')(process.argv.slice(2)),
    minifyCSS = require('gulp-minify-css');


var paths = {
    lessPath: './styles/less',
    bowerPath: './bower_components',
    fonts: ['./bower_components/bootstrap/fonts/*', './bower_components/font-awesome/fonts/*']
};

var jsLibs = require('./requiredJsLibs');

gulp.task('clean', function(done) {
    del(['./styles/css/*', './js/dist/*', './styles/fonts/*'], {force: true}, done);
});

gulp.task('copy:fonts', function() {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('./styles/fonts'));
});

gulp.task('concat:devLibs', function() {
    return gulp.src(jsLibs(paths.bowerPath.replace('./', '')))
        .pipe(plugins.concat('lib.js'))
        .pipe(gulp.dest('./js/dist'));
});

gulp.task('less', function() {
    return gulp.src('./styles/less/styles.less')
        .pipe(plugins.plumber())
        .pipe(plugins.less({
            paths: [
                paths.lessPath,
                paths.bowerPath
            ]
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./styles/css'));
});

gulp.task('jshint', function() {
    return gulp.src(['./js/src/**/*.js'])
        .pipe(plugins.jshint('.jshintrc'))
        .pipe(plugins.jshint.reporter('jshint-summary', {
            fileColCol: ',bold',
            positionCol: ',bold',
            codeCol: 'green,bold',
            reasonCol: 'cyan'
        }))
        .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('devDist', ['clean'], function (done) {
    runSequence(
        'copy:fonts',
        'concat:devLibs',
        'less',
        done);
});

gulp.task('browserify', function () {
    var bundler = browserify({
        cache: {}, packageCache: {}, fullPaths: true,
        entries: ['./js/src/main.js'],
        insertGlobals: true,
        debug: true
    });

    var rebundle = function () {
        return bundler
            .bundle()
            .pipe(source('main.js'))
            .pipe(plugins.duration('bundle time'))
            .pipe(buffer())
            .pipe(gulp.dest('./js/dist'))
            .pipe(plugins.livereload())
            .on('error', gutil.log);
    };

    if (process.env.NODE_ENV !== 'production') {
        bundler = watchify(bundler);
        bundler
            .on('update', function() {
                //to exclude jshint task pass -f argument
                if(!argv.f) {
                    return gulp.start(['jshint'], rebundle);
                }
                return rebundle();
            })
            .on('error', gutil.log);
    }

    return rebundle();
});

gulp.task('watch', ['browserify'], function (done) {
    gulp.watch('./styles/less/*.less', ['less']);

    done();
});

gulp.task('livereload', function () {
    var lrserver = plugins.livereload();

    gulp.watch('./js/src/**/*.js').on('change', function(file) {
        lrserver.changed(file.path);
    });
});

gulp.task('dev', function (done) {
    runSequence(
        'devDist',
        'watch',
        done);
});

// Help
gulp.task('help', function(next) {
    gutil.log('--- ' + pkg.name + ' ---');
    gutil.log('');
    gutil.log('See all of the available tasks:');
    gutil.log('$ gulp -T');
    gutil.log('');
    gutil.log('Run a dev mode server:');
    gutil.log('$ gulp dev');
    gutil.log('');
    gutil.log('Run a prod mode server:');
    gutil.log('$ gulp prod');
    next();
});

// Default
gulp.task('default', ['help']);