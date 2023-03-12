<?php
require("dbcon.php");
include '_variables.php';
if($_POST['page'] == "usertype"){
    $sql = "insert into tblusertype values('$id','$type')";
}else if($_POST['page'] == "home"){
    $sql="insert into tblempdata values('$id','$name','$address','$state','$city','$area','$mobi','$bal','$type')";
}else if(($_POST['page'] == "state"){
    $sql = "insert into"
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
