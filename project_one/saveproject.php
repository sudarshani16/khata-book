<?php
require("dbcon.php");
$id=(isset($_POST["txtid"])) ? $_POST["txtid"] : "";
$name=(isset($_POST["txtname"])) ? $_POST["txtname"] : "";
$address=(isset($_POST["txtadd"])) ? $_POST["txtadd"] : "";
$city=(isset($_POST["txtcity"])) ? $_POST["txtcity"] : "";
$bal=(isset($_POST["txtbal"])) ? $_POST["txtbal"] : "" ;
$mobi=(isset($_POST["txtmobi"])) ? $_POST["txtmobi"] : "";
$area=(isset($_POST["txtarea"]))? $_POST["txtarea"] : "";
$type=(isset($_POST["txttype"])) ? $_POST["txttype"] : "";
$state=(isset($_POST["txtstate"])) ? $_POST["txtstate"] : "";
   
if($_POST['page'] == "usertype"){
    $sql = "insert into tblusertype values('$id','$type')";
}else if($_POST['page'] == "home"){
    $sql="insert into tblempdata values('$id','$name','$address','$state','$city','$area','$mobi','$bal','$type')";
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
