/**
 * Created by Stone on 2016/8/15.
 */
var gulp=require('gulp');
var less=require('gulp-less');
var concat=require('gulp-concat');
var minifyCss=require('gulp-minify-css');
var rename=require('gulp-rename');
var uglify=require('gulp-uglify');

/*创建任务 任务名称，注入项，处理函数*/
gulp.task('less',function () {
    console.log('less to css');
    return gulp.src(['./www/less/*.less'])
        .pipe(less())                                       //应用插件
        .pipe(gulp.dest('./www/css'));                      //运行 输出
});

gulp.task('concat-minify-rename-css',['less'],function (less) {
    gulp.src('./www/css/*.css')
        .pipe(concat('min.css'))
        .pipe(gulp.dest('./www/css-dist/'))
        .pipe(minifyCss())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./www/css-dist/'));
});

gulp.task('build-css',['concat-minify-rename-css']);   //依赖的方式重命名

gulp.task('watch-css',function () {
    gulp.watch('./www/less/*.less',function () {
        gulp.start('build-css');
    })
})





