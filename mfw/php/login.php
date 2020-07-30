<?php
    header("content-type:text/html;charset='utf-8'");
    $responseDate = array("code" => 0, "msg" => "");

    $username = $_POST["username"];
    $password = $_POST["password"];
    //判断用户名是否为空
    if(!$username){
        $responseDate['code'] = "1";
        $responseDate['msg'] = '用户名不能为空';
        echo json_encode($responseDate);
        exit;
    }
    //判断密码为空
    if(!$password){
        $responseDate['code'] = '2';
        $responseDate["msg"] = '密码不能为空';
        echo json_encode($responseDate);
        exit;
    }

    // 1.链接数据库
    $link = mysql_connect("127.0.0.1","root","123456");
    // 2.判断数据库链接是否链接成功
    if(!$link){
        $responseDate['code'] = '3';
        $responseDate['msg'] = '服务器繁忙';
        echo json_encode($responseDate);
        exit;
    }

    // 3.设置字符编码
    mysql_set_charset("utf8");
    // 4.选择数据库
    mysql_select_db("mfw");
    // 5.准备sql语句
    //加密
    $str = md5(md5($password).'jikaicheng');
    $sql = "SELECT *  FROM user where username = '{$username}' AND password = '{$str}'";
    // 6.发送aql语句 接收返回结果
    $res = mysql_query($sql);
    // 7.处理返回结果
    //从结果集中取得一行作为关联数组
    $row = mysql_fetch_assoc($res);
    //判断结果
    if($row){
        $responseDate['msg'] = "登陆成功";
        echo json_encode($responseDate);
    }else{
        $responseDate['code'] = "4";
        $responseDate['msg'] = '用户名或密码错误';
        echo json_encode($responseDate);
        exit;
    }
    //关闭数据库
    mysql_close();


?>