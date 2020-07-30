console.log("加载成功");
require.config({
    paths:{
        data:"data-go",
        jquery:"jquery-3.5.1",
        "jquery-cookie":"jquery.cookie",
        gotravel:"gotravel",
        parabola:"parabola"
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
require(["data","gotravel"],function(data,go){
    data.download();
    go.goodsBtn();
    

})