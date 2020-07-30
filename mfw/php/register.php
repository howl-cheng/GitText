<?php
    header("content-type:text/html;charset='utf-8'");

    $responseData = array("code" => 0,"msg" =>"");

    $username = $_POST["username"];
    $password = $_POST["password"];
    $repassword = $_POST["repassword"];
    $createTime = $_POST["createTime"];

    //1.判断用户名是否为空
    if(!$username){
        $responseData["code"] = 1;
        $responseData["msg"] = "用户名不能为空";
        echo json_encode($responseData);
        exit;
    }
    //2判断密码是否为空
    if(!$password){
        $responseData["code"] = 2;
        $responseData["msg"] = "密码不能为空";
        echo json_encode($responseData);
        exit;
    }
    //判断两次输入密码是否一致
    if($password != $repassword){
        $responseData["code"] = 3;
        $responseData["msg"] = "两次输入密码不一致";
        echo json_encode($responseData);
        exit;
    }

    //天龙八部
    $link = mysql_connect("127.0.01","root","123456");
    if(!$link){
        $responseData["code"] = 4;
        $responseData["msg"] = "服务器繁忙";
        echo json_encode($responseData);
        exit;
    }
    mysql_set_charset("utf8");
    mysql_select_db("mfw");

    //准备sql语句判断用户名是否存在
$sql = "SELECT * FROM user WHERE username = '{$username}'";
$res = mysql_query($sql);
$row = mysql_fetch_assoc($res);
if($row){
    $responseData["code"] = 5;
    $responseData["msg"] = "用户名已存在";
    echo json_encode($responseData);
    exit;
}

$str = md5(md5($password)."jikaicheng");
$sql2 = "INSERT INTO user (username,password,createTime) VALUES ('{$username}','{$str}','{$createTime}')";
$res = mysql_query($sql2);
if($res){
    $responseData['msg'] = "注册成功";
    echo json_encode($responseData);
}else{
    $responseData["code"] = 6;
    $responseData["msg"] = "注册失败";
    echo json_encode($responseData);
    exit;
}
//关闭数据库
mysql_close();

?>