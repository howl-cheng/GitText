console.log("加载成功");
//配置路径
require.config({
    paths:{
        slider:"slider",
        jquery:"jquery-3.5.1",
        data:"data",
        index:"index"
    },
    shim:{
        //设置依赖关系
        "jquery-cookie":["jquery"],
        //某个模块不遵循AMD
        parabola:{
            exports:"_",
        },
    },
});

//引入
require(["slider","data","index"],function(slider,data,index){
    slider.banner();
    slider.minBanner();
    data.download();
    data.bannerData();
    data.newsData();
    data.download1();
    index.tnTab();
})