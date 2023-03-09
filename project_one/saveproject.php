<?php
require("dbcon.php");
// echo "Hello heman<br>";
// echo $_SERVER['QUERY_STRING'];
// $x =  (isset($_POST['daya'])) ? $_POST['daya'] : "Not Present";
// echo $x;
// if(isset($_POST['submit']))
// {
$id=(isset($_POST["txtid"])) ? $_POST["txtid"] : "";
$name=(isset($_POST["txtname"])) ? $_POST["txtname"] : "";
$address=(isset($_POST["txtadd"])) ? $_POST["txtadd"] : "";
$city=(isset($_POST["txtcity"])) ? $_POST["txtcity"] : "";
$bal=(isset($_POST["txtbal"])) ? $_POST["txtbal"] : "" ;
$mobi=(isset($_POST["txtmobi"])) ? $_POST["txtmobi"] : "";
$area=(isset($_POST["txtarea"]))? $_POST["txtarea"] : "";
$type=(isset($_POST["txttype"])) ? $_POST["txttype"] : "";
$state=(isset($_POST["txtstate"])) ? $_POST["txtstate"] : "";
   
if($_POST['page'] == "user-type"){
    $sql = "insert into tblusertype values('$id','$type')";
}else if($_POST['page'] == "home"){
    $sql="insert into tblempdata values('$id','$name','$address','$state','$city','$area','$mobi','$bal','$type')";
}
if(mysqli_query($link,$sql)){
    // echo "<script>alert('record inserted')</script>";
    $extra="index.php";
    $host=$_SERVER['HTTP_HOST'];
    $uri=rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
    echo"<script>open('http://$host$uri/$extra','_self')</script>";
}else{
    $error=mysqli_error($link);
    echo $error;
}
mysqli_close($link);
// }
// else if(isset($_GET['action']))
//     {
//         $id=$_GET["id"];
//         $sql="delete from tblempdata  where id='$id'";
//         if(mysqli_query($link,$sql))
//         {
//              echo "<script>alert('Record Deleted')</script>";
//              $extra="index.php";
//              $host=$_SERVER['HTTP_HOST'];
//              $uri=rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
//              echo "<script>open('http://$host$uri/$extra','_self')</script>"; 
//         }
//         else
//         {
//              $error = mysqli_error($link);
//              echo $error;

//         }
        
//     }
?>
