define(["jquery"],function($){
    function tnTab(){
        var aBtns = $(".tn-nav");
        var aUls = $(".tn-show");
        // console.log(aUls)
        aBtns.on("click",".tn-nav-bar",function(){
            $(this).addClass("tn-active").siblings().removeClass("tn-active");
            console.log($(this).index());
            aUls.eq($(this).index()).css("display","block").siblings().css("display","none");
        })
    };
    return{
        tnTab:tnTab
    }
})

