define(["jquery"],function($){

    function login(){
        $(".login-btn").click(function(){
            link();
        })
    }

    function link(){
        $.ajax({
            type:"post",
            url:"../php/login.php",
            data:{
                username:$(".username").val(),
                password:$(".password").val()
            },
            success:function(result){
                var obj = JSON.parse(result);
                
                if(obj.code){
                    $(".alert").css("display","block");
                    $(".alert").removeClass("active-true").addClass("active-false");
                    $(".alert").html(obj.msg);
                }else{
                    $(".alert").css("display","block");
                    $(".alert").removeClass("active-false").addClass("active-true");
                    $(".alert").html(obj.msg);
                    var timer = setTimeout(() => {
                        location.assign("./index.html");
                    }, 2000);

                }
            },
            error:function(msg){
                console.log(msg);
            }

        })
    }
    function tab(){
        $(".top-bar").on("click",".accunt-tab",function(){
            $(this).addClass("active").siblings().removeClass("active");
            console.log($(this).index());
            $(".show-box").eq($(this).index()).show().siblings().hide()
        })
    }
    return{
        login:login,
        tab:tab
    }
})