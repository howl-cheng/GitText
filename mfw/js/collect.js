define(["jquery","jquery-cookie"],function($){
    function dataDownload(){
        $.ajax({
            url:"../data/goTravel.json",
            success:function(arr){
                var cookieStr = $.cookie("good");
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    var newsubArr = [];
                    var newArr =[]
                    for(var i = 0;i < arr.length;i++){
                        newsubArr = newsubArr.concat(arr[i].subtext);
                    }
                    for(var i = 0;i < newsubArr.length; i++){
                        for(var j = 0;j < cookieArr.length;j++){
                            if(newsubArr[i].id == cookieArr[j].id){
                                newsubArr[i].num = cookieArr[j].num;
                                newArr.push(newsubArr[i]);
                                break;
                            }
                        }
                    }
                    for(var i = 0; i < newArr.length; i++){
                        $(`<li class="item clear_fix" id="${newArr[i].id}">
                    <div class="img-box">
                    <a href="#">
                        <img src="${newArr[i].img}">
                    </a>
                    </div>
                    <div class="infor">
                    <h3>[${newArr[i].shop}]</h3>
                    <p><a href="#">
                        ${newArr[i].text}</a></p>
                    <span>￥ ${newArr[i].price}</span>
                    </div>
                    <div class="all-btn">
                        <div class="num">
                            <h2 class="btn_num">+</h2>
                            <h2 class="goodnum">${newArr[i].num}</h2>
                            <h2 class="btn_num">-</h2>
                        </div>
                        <button class="delete-collect">删除商品</button>
                    </div>
                </li>`).prependTo(".m-collect");
                    }
                    
                }
            },
            error:function(msg){
                console.log(msg);
            }
            
        })
    }
    //清空收藏列表
    function clearCar(){
        $(".remove-shop").click(function(){
            $(".m-collect").empty();
            $.cookie("good",null);
        })
    }
    //取消收藏
    function removeCollect(){
        $(".m-collect").on("click",".delete-collect",function(){
            var id = $(this).closest("li").remove().attr("id");
            var cookieArr = JSON.parse($.cookie("good"));
            cookieArr = cookieArr.filter(item => item.id != id);
            cookieArr.length ? $.cookie("good",JSON.stringify(cookieArr),{expires:7}) : $.cookie("good",null) 
        })
    }
    //数量加减
    function numChange(){
        $(".m-collect").on("click",".btn_num",function(){
            var id = $(this).closest("li").attr("id");
            var cookieArr = JSON.parse($.cookie("good"));
            var res = cookieArr.find(item => item.id == id);
            if(this.innerHTML == "+"){
                res.num++;
            }else{
                res.num == 1 ? alert("商品数量只有一份了，如果不想要了，请点击删除商品") : res.num--;
            }
            $(this).siblings(".goodnum").html(res.num);
            $.cookie("good",JSON.stringify(cookieArr),{expires:7});
        })
    }


    return {
        dataDownload:dataDownload,
        clearCar:clearCar,
        removeCollect:removeCollect,
        numChange:numChange
    }
})