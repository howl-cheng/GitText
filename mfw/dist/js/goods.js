define(["parabola","jquery","jquery-cookie"],function(parabola,$){
    function onload(){
        dz_num(".goods-num");
    }
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
                    // console.log(newArr);
                    for(var i = 0; i <newArr.length;i++){
                        $(`
                            <div class="imgbox">
                                <img src="${newArr[i].img}" alt="">
                                <span class="filter"></span>
                            </div>
                            <div class="bigImgbox">
                                <img src="${newArr[i].img}" alt="" class ="bigP">
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
                            </div>`).appendTo(".intro-l");

                        $(`<div class="goods-title">
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
                                <h2 class="dz_btn" id="${newArr[i].id}">加入购物车</h2>
                            </div>
                            <div class="infor-tips">
                                <span>预订须知</span>
                                <p>支付完成后商家最晚会在4个工作小时内（工作日9:00-18:00）确认是否预定成功</p>
                            </div>`).appendTo(".intro-r");
                    }
                }
            },
            error:function(msg){
                console.log(msg);
            }

        })
    }
    //添加cookie
    function dz_btn(){
        $(".intro-r").on("click",".dz_btn",function(){
            var id = this.id;
            // console.log(id)
            var first = $.cookie("good") == null ? true : false;
            if(first){
                var arr = [{id:id,num:1}];
                $.cookie("good",JSON.stringify(arr),{expires:7});
            }else{
                var cookieArr = JSON.parse($.cookie("good"));
                var index = cookieArr.findIndex(item => item.id == id);
                if(index >= 0){
                    cookieArr[index].num++;
                }else{
                    cookieArr.push({id:id,num:1});
                }
                $.cookie("good",JSON.stringify(cookieArr),{expires:7});
            }
            dz_num(".goods-num");
            ballMove(this);
        })
    }
    //添加购物车数量
    function dz_num(node){
        var cookieStr = $.cookie("good");
        // console.log(cookieStr)
        if(!cookieStr){
            $(node).html(0);
        }else{
            var cookieArr = JSON.parse(cookieStr);
            var sum = 0;
            for(var i = 0; i < cookieArr.length;i++){
                sum += cookieArr[i].num;
            }
            $(node).html(sum);
        }
    }
    //购物车按钮添加点击
    function collectBox(){
        $(".collect-box").click(function(){
            location.assign("collect.html");
        })
    }

    //抛物线
    function ballMove(oBtn){
        // console.log(oBtn);
        $("#ball").show().css({
           left:$(oBtn).offset().left,
           top:$(oBtn).offset().top
        });
        var x = $(".goods-num").offset().left - $(oBtn).offset().left;
        var y = $(".goods-num").offset().top - $(oBtn).offset().top;
        // console.log(x,y)
        var bool = new Parabola({
            el:"#ball",
            offset:[x,y],
            duration:500,
            curvature:0.009,
            callback:function(){
                $("#ball").hide();
            }

        })
        bool.start();
    }
    //放大镜
    function magnifier(){
        $(".intro-l").on("mouseenter",".imgbox",function(){
           $(this).find(".filter").show();
           $(this).next().show();
        }).on("mouseleave",".imgbox",function(){
           $(this).find(".filter").hide();
           $(this).next().hide();
        }).on("mousemove",".imgbox",function(ev){
            var l = ev.clientX - $(".imgbox").offset().left - 50;
            var t = ev.clientY - $(".imgbox").offset().top - 50;
            if(l <= 0){
                l = 0;
            }
            if(l >= 300){
                l = 300;
            }
            if(t <= 0){
                t = 0;
            }
            if(t >= 130){
                t = 130;
            }
            $(this).find(".filter").css({
                left:l,
                top:t
            })
            $(this).next().find(".bigP").css({
                left: -2 * l,
                top: -2 * t 
            })

        })
    }
    
    return{
        download:download,
        magnifier:magnifier,
        dz_btn:dz_btn,
        onload:onload,
        collectBox:collectBox
    }
})