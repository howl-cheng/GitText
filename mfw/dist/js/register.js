define(["jquery"],function($){
    
    function register(){
        $(".register-btn").click(function(){
            link();
        })
    }
    function link(){
        $.ajax({
            type:"post",
            url:"../php/register.php",
            data:{
                username:$(".username").val(),
                password:$(".password").val(),
                repassword:$(".repassword").val(),
                createTime:(new Date().getTime())
            },
            success:function(result){
               var obj =JSON.parse(result);

              
               if(obj.code){
                   //错误
                   $(".alert").css("visibility","visible");
                   $(".alert").removeClass("active-success").addClass("active-false").html(obj.msg);
               }else{
                   //成功
                   $(".alert").css("visibility","visible");
                   $(".alert").removeClass("active-false").addClass("active-success").html(obj.msg);

               }
            },
            error:function(msg){
                console.log(msg);
            }
        })

    }

    return {
       register:register
    }
})