(function() {
    'use strict';

    var gulp = require('gulp'),
        mocha = require('gulp-mocha'),
        istanbul = require('gulp-istanbul'),
        uglify = require('gulp-uglify'),
        del = require('del'),
        rename = require('gulp-rename'),
        browserify = require('browserify'),
        source = require('vinyl-source-stream'),
        header = require('gulp-header'),
        notifierReporter = require('mocha-notifier-reporter'),
        fs = require('fs'),
        coverageEnforcer = require('gulp-istanbul-enforcer'),
        stopOnUnitTestFailure = false,
        MAIN = './source/lodashExtensions.js',
        SOURCE = 'source/*.js',
        TESTS = 'tests/*.js',
        DEST = './dist',
        STANDALONE = 'ai.lodashExtensions',
        SRC_COMPILED = 'ai.lodash.extensions.js',
        MIN_FILE = 'ai.lodash.extensions.min.js',
        LICENSE = 'license_prefix.txt',
        UTF8 = 'utf8';


    gulp.task('compile', ['browserify', 'run-mocha']);

    gulp.task('run-mocha', () => {
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

    gulp.task('watch', () => {
        stopOnUnitTestFailure = true;
        gulp.watch([SOURCE, TESTS], ['run-mocha']);
    });

    gulp.task('browserify', () => {
        return browserify(MAIN, {
                standalone: STANDALONE
            })
            .bundle()
            .pipe(source(SRC_COMPILED))
            .pipe(gulp.dest(DEST));
    });

    gulp.task('clean', (deleteDone) => {
        del.sync([
            'dist'
        ]);
        deleteDone();
    });

    gulp.task('build', ['compile', 'clean'], () => {
        var licenseInfo = fs.readFileSync(LICENSE, UTF8);
        return gulp.src(DEST + '/' + SRC_COMPILED)
            .pipe(header(licenseInfo))
            .pipe(gulp.dest(DEST))
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
            .pipe(header(licenseInfo))
            .pipe(rename(MIN_FILE))
            .pipe(gulp.dest(DEST));
    });

    gulp.task('default', ['build']);
})();
