<?php
require("dbcon.php");
include '_variables.php';
if($_POST['page'] == "usertype"){
    $sql = "insert into tblusertype values('$id','$type')";
}else if($_POST['page'] == "home"){
    $sql="insert into tblempdata values('$id','$name','$address','$state','$city','$area','$mobi','$bal','$type')";
}else if($_POST['page'] == "state"){
    $i=0;
    $NewId = 0;
    while($name[$i] != '.'){
        $NewId =  10 * $NewId + ($name[$i]-'0');
        $i++;
    }
    $newName = substr($name,$i+2,strlen($name));
    $sql="select * from state where `user id` = $NewId and state = '$state'";
    $res=mysqli_query($link,$sql); 
    if($res ->num_rows == 1){
        header('Location: http://localhost/my/khata-book/project_one/index.php?master=state&pres=1');
        exit();
    }else{
        $sql = "insert into state values('$NewId','$newName','$state')";
    }
}else{
    $sql = "";
}

if(mysqli_query($link,$sql)){
    // echo "<script>alert('record inserted')</script>";
    $extra="index.php?master=" . $_POST['page'];
    $host=$_SERVER['HTTP_HOST'];
    $uri=rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
    echo"<script>open('http://$host$uri/$extra','_self')</script>";
}else{
    $error=mysqli_error($link);
    echo $error;
}
mysqli_close($link);
?>
