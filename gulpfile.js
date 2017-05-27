var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('html', function(){

});
gulp.task('css', function(){

});

gulp.task('watch', function() {
	watch('index.html', function(){
		gulp.start('html');
	});

	watch('./css/**/*.css', function(){
		gulp.start('css');
	});

});