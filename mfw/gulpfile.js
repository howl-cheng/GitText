//首先引入gulp
const gulp = require("gulp");
//拷贝html代码并进行压缩（gulp-htmlmin）
const htmlmin = require("gulp-htmlmin")
gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(htmlmin({
        removeEmptyAttibutes:true,//移出所有空属性
        collapseWhitespace:true //压缩html
    }))
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})


//拷贝图片
gulp.task("images",function(){
    return gulp.src("images/*.{jpg,png,jpeg}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})


// 拷贝js   压缩(gulp-uglify) 如果是第三方库则不需要处理了只拷贝就可以
gulp.task("script",function(){
    return gulp.src("js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})
//拷贝php
gulp.task("php",function(){
    return gulp.src("php/*.php")
    .pipe(gulp.dest("dist/php"))
    .pipe(connect.reload());
})


// 数据源文件
gulp.task("data",function(){
    return gulp.src(["data/*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})



//处理scss文件 (gulp-sass gulp-minify-css gulp-rename)
//如果不重命名，可以批量处理，如果重命名，一个文件一个任务名，任务名不能重复
const scss = require("gulp-sass");
const minifyCss = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("scss",function(){
    gulp.src("stylesheet/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});
gulp.task("scss1",function(){
    gulp.src("stylesheet/public.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("public.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});
gulp.task("scss2",function(){
    gulp.src("stylesheet/reset.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("reset.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scss3",function(){
    gulp.src("stylesheet/gotravel.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("gotravel.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scss4",function(){
    gulp.src("stylesheet/goods.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("goods.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scss5",function(){
    gulp.src("stylesheet/collect.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("collect.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scss6",function(){
    gulp.src("stylesheet/register.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("register.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scss7",function(){
    gulp.src("stylesheet/login.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("login.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})



//统一执行一次 build
gulp.task("build",["copy-html","script","images","data","php","scss","scss1","scss2","scss3","scss4","scss5","scss6","scss7"],function(){
    console.log("项目建立成功")
})


//实现监听
gulp.task("watch",function(){
    gulp.watch("*.html",["copy-html"]);
    gulp.watch("images/*.{jpg,png,jprg}",["images"]);
    gulp.watch("js/*.js",["script"]);
    gulp.watch(["data/*.json","!package.json"],["data"]);
    gulp.watch("stylesheet/index.scss",["scss"]);
    gulp.watch("stylesheet/public.scss",["scss1"]);
    gulp.watch("stylesheet/reset.scss",["scss2"]);
    gulp.watch("stylesheet/gotravel.scss",["scss3"]);
    gulp.watch("stylesheet/goods.scss",["scss4"]);
    gulp.watch("stylesheet/collect.scss",["scss5"]);
    gulp.watch("stylesheet/register.scss",["scss6"]);
    gulp.watch("stylesheet/login.scss",["scss7"]);
    gulp.watch("php/*.php",["php"]);
});


//启动一个临时的服务器（gulp-connect）
const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:8888,
        livereload:true,
    });
});


//同时启动监听和服务
gulp.task("default",["watch","server"]);