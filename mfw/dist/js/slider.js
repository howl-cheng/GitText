define(["jquery"],function($){
    function banner(){
        $(function(){
            var aLis = $(".show-image li");
            var aBtns = $(".imge-btn li");
            var timer = null;
            var index = 0;
            var nextIndex = 0;
            // 开始轮播
            autoPlay();

            //轮播定时器
            function autoPlay(){
                timer = setInterval(function(){
                    if(nextIndex >= 4){
                        nextIndex = 0
                    }else{
                        nextIndex++;
                    }
                    tab();
                    index = nextIndex;
                },4000)
            }
        
        
            $(".banner-con").mouseenter(function(){
                clearInterval(timer);
            }).mouseleave(function(){
                autoPlay();
            })
        
            aBtns.click(function(){
                nextIndex = $(this).index();
                tab();
                index = nextIndex;
            })
            //阻止a标签
            
            //封装轮播函数
            function tab(){
                aLis.eq(index).stop().fadeOut(2000);
                aLis.eq(nextIndex).stop().fadeIn(2000);
                aBtns.find("span").css("display","none").eq(nextIndex).css("display","block")
            }   
        })
    }
    //小轮播图
    function minBanner(){
        $(function(){
            var oBox = $(".img-Box");
            var aBtns = $(".btn-box li");
            var timer = null;
            var iNow = 0;

            aBtns.click(function(){
                iNow = $(this).index();
                tab();
            }) 

            timer = setInterval(function(){
                iNow++;
                tab();
            },3000)

            window.onfocus = function(){
                timer = setInterval(function(){
                    iNow++;
                    tab();
                },3000)
            }
            window.onblur = function(){
                clearInterval(timer)
            }
            $(".travel-banner").mouseenter(function(){
                clearInterval(timer);
            }).mouseleave(function(){
                timer = setInterval(function(){
                    iNow++;
                    tab();
                },3000)
            })

            //封装运动函数
            function tab(){
                aBtns.removeClass("btnActive").eq(iNow).addClass("btnActive");
                if(iNow == 5){
                  aBtns.eq(0).addClass("btnActive");
                //   iNow = 0;
                }
                oBox.animate({left:iNow * -260},1000,function(){
                    if(iNow == 5){
                        iNow = 0;
                        oBox.css("left",0);
                    };
                });


            }
        })

    }
    return {
        banner:banner,
        minBanner:minBanner
    }
})