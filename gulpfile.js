(function() {
    'use strict';

    var gulp = require('gulp'),
        mocha = require('gulp-mocha'),
        istanbul = require('gulp-istanbul'),
        uglify = require('gulp-uglify'),
        del = require('del'),
        rename = require('gulp-rename'),
        browserify = require('gulp-browserify'),
        header = require('gulp-header'),
        notifierReporter = require('mocha-notifier-reporter'),
        fs = require('fs'),
        coverageEnforcer = require('gulp-istanbul-enforcer'),
        stopOnUnitTestFailure = false,
        MAIN = 'source/lodashExtensions.js',
        SOURCE = 'source/*.js',
        TESTS = 'tests/*.js',
        DEST = './dist',
        STANDALONE = 'ai.lodashExtensions',
        SRC_COMPILED = 'ai.lodash.extensions.js',
        MIN_FILE = 'ai.lodash.extensions.min.js',
        LICENSE = 'license_prefix.txt',
        UTF8 = 'utf8';


    gulp.task('test', ['browserify', 'run-mocha']);

    gulp.task('run-mocha', function() {
        var reporters = ['html', 'text', 'text-summary', 'json'];
        return gulp.src([SOURCE])
            .pipe(istanbul({includeUntested: true}))
            .pipe(istanbul.hookRequire())
            .on('finish', function() {
                gulp.src([TESTS])
                    .pipe(mocha({
                        reporter: stopOnUnitTestFailure === false ? 'spec' : notifierReporter.decorate('spec'),
                        globals: {
                            describe: require('mocha')
                        }
                    }))
                    .on('error', function() {
                        if(stopOnUnitTestFailure === false ) {
                            this.emit('end');
                        }
                    })
                    .pipe(istanbul.writeReports({
                        reporters: reporters
                    }));
            });
    });

    gulp.task('watch-test', function() {
        stopOnUnitTestFailure = true;
        gulp.watch([SOURCE, TESTS], ['run-mocha']);
    });

    gulp.task('browserify', function() {
        return gulp.src(MAIN)
            .pipe(browserify({
                insertGlobals: true,
                standalone: STANDALONE
            }))
            .pipe(header(fs.readFileSync(LICENSE, UTF8)))
            .pipe(rename(SRC_COMPILED))
            .pipe(gulp.dest(DEST));
    });

    gulp.task('clean', function(deleteDone) {
        del.sync([
            'dist'
        ]);
        deleteDone();
    });

    gulp.task('build', ['test', 'clean'], function() {
        return gulp.src(DEST + '/' + SRC_COMPILED)
            .pipe(uglify())
            .pipe(coverageEnforcer({
                thresholds : {
                    statements: 100,
                    branches: 100,
                    functions: 100,
                    lines: 100
                },
                coverageDirectory : 'coverage',
                rootDirectory : '.'
            }))
            .pipe(header(fs.readFileSync(LICENSE, UTF8)))
            .pipe(rename(MIN_FILE))
            .pipe(gulp.dest(DEST));
    });

    gulp.task('default', ['build']);
})();
