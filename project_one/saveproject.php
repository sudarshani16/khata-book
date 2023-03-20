<?php
require("proj_init.php");
include '_variables.php';
function redir(){
    $extra="index.php?master=" . $_POST['page'];
    $host=$_SERVER['HTTP_HOST'];
    $uri=rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
    echo"<script>open('http://$host$uri/$extra&pres=1','_self')</script>";
}
if($_POST['page'] == "usertype"){
    $sql = "insert into tblusertype values('$id','$type')";
}else if($_POST['page'] == "home"){
    $sql = "select * from tblempdata where Id = '$id'";
    $res=mysqli_query($link,$sql); 
    if($res ->num_rows == 1){
        $sql = "UPDATE `tblempdata` SET `Name`='$name',`Address`='$address',`State`='$state',`City`='$city',`Area`='$area',`Mobile No`='$mobi',`Balance`='$bal',`User Type`='$type' WHERE `Id`='$id';";
    }else{
        $sql="insert into tblempdata values('$id','$name','$address','$state','$city','$area','$mobi','$bal','$type')";
    }
}else if($_POST['page'] == "state"){
    $i=0;
    $NewId = 0;
    while($name[$i] != '.'){
        $NewId =  10 * $NewId + ($name[$i]-'0');
        $i++;
    }
    $newName = substr($name,$i+2,strlen($name));
    $sql="select * from state where `User Id` = $NewId and State = '$state'";
    $res=mysqli_query($link,$sql); 
    if($res ->num_rows == 1){
        redir();
    }else{
        $sql = "insert into state values('$NewId','$newName','$state')";
    }
}else if($_POST['page'] == "city"){
    $i=0;
    $NewId = 0;
    while($name[$i] != '.'){
        $NewId =  10 * $NewId + ($name[$i]-'0');
        $i++;
    }
    $newName = substr($name,$i+2,strlen($name));
    $sql="select * from city where `User Id` = '$NewId' and State ='$state' and City = '$city'";
    $res=mysqli_query($link,$sql); 
    if($res ->num_rows == 1){
        redir();
    }else{
        $sql = "insert into city values('$NewId','$newName','$state','$city')";
    }
}else if($_POST['page'] == "area"){
    $i=0;
    $NewId = 0;
    while($name[$i] != '.'){
        $NewId =  10 * $NewId + ($name[$i]-'0');
        $i++;
    }
    $newName = substr($name,$i+2,strlen($name));
    $sql="select * from area where `User Id` = '$NewId' and State ='$state' and City = '$city' and Area = '$area'";
    $res=mysqli_query($link,$sql); 
    if($res ->num_rows == 1){
        redir();
    }else{
        $sql = "insert into area values('$NewId','$newName','$state','$city','$area')";
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
