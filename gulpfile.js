const { dest, parallel, series, src } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const ghPages = require('gulp-gh-pages');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

const deploy = () => src('./dist/**/*').pipe(ghPages());

const images = () =>
	src('./images/*.png')
		.pipe(imagemin())
		.pipe(dest('./dist/images/'));

const markup = () =>
	src('./index.html')
		.pipe(htmlmin())
		.pipe(dest('./dist/'));

const scripts = () =>
	src('./index.js')
		.pipe(uglify())
		.pipe(dest('./dist/'));

const styles = () =>
	src('./index.css')
		.pipe(cleanCSS())
		.pipe(dest('./dist/'));

const video = () => src('./endless-mode.mp4').pipe(dest('./dist/'));

const build = parallel(images, markup, scripts, styles, video);

exports.default = build;

exports.deploy = series(build, deploy);
