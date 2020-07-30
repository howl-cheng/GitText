define(["jquery","jquery-cookie"],function($){
    function goodsBtn(){
        $(".mod-promo").on("click",".item-box",function(){
            var id = this.id;
            var arr = [{id:id}]
            $.cookie("goods",JSON.stringify(arr),{expires:7});
            var cookieArr = JSON.parse($.cookie("goods"));
            console.log(cookieArr)
        })
    }
    return {
        goodsBtn:goodsBtn
    }
})
