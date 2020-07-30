define(["parabola","jquery","jquery-cookie"],function(){
    function download(){
        $.ajax({
            url:"../data/goTravel.json",
            success:function(arr){
               var cookieStr = $.cookie("goods");
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    var newArr = [];
                    for(var i = 0;i < arr.length;i++){
                        var subArr = arr[i].subtext;
                        for(var j = 0;j < subArr.length;j++){
                            if(subArr[j].id == cookieArr[0].id){
                                newArr.push(subArr[j]);
                                break;
                            }
                        }
                    }
                    console.log(newArr);
                    for(var i = 0; i <newArr.length;i++){
                        $(`<div class="good-intro clearfix">
                        <div class="intro-l">
                            <div class="imgbox">
                                <img src="${newArr[i].img}" alt="">
                            </div>
                            <div class="collect">
                                <a href="#">
                                    <i class="i-collect"></i>
                                    收藏
                                </a>
                                <a href="#">
                                    <i class="i-fenxiang"></i>
                                    分享
                                </a>
                            </div>
                        </div>
                        <div class="intro-r">
                            <div class="goods-title">
                                <h1> <span>店铺</span>${newArr[i].text}</h1>
                                <div class="g-label">
                                    <span>市中心住宿</span>
                                    <span>可搭配景区门票</span>
                                    <span>赠旅游意外险</span>
                                    <span>咨询领券</span>
                                </div>
                            </div>
                            <div class="price-panel">
                                <div class="price">￥${newArr[i].price}</div>
                                <span>已售58</span>
                                <h2 class="dingzhi" id="${newArr[i].id}">立即定制</h2>
                            </div>
                            <div class="infor-tips">
                                <span>预订须知</span>
                                <p>支付完成后商家最晚会在4个工作小时内（工作日9:00-18:00）确认是否预定成功</p>
                            </div>
                        </div>
                    </div>`).appendTo(".container");
                    }
                }
            },
            error:function(msg){
                console.log(msg);
            }

        })
    }
    return{
        download:download
    }
})