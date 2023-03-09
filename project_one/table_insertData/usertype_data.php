<?php
require("dbcon.php");
if(isset($_POST['submit']))
{
    $id=$_POST["txtid"];
    $name=$_POST["txtuser"];
    $address=$_POST["txtadd"];
    $city=$_POST["txtcity"];
    $bal=$_POST["txtbal"];
    $mobi=$_POST["txtmobi"];
    $area=$_POST["txtarea"];
    $type=$_POST["txttype"];
    $state=$_POST["txtstate"];
    
    $sql="insert into tblempdata values('$id','$name','$address','$state','$city','$area','$mobi','$bal','$type')";
    if(mysqli_query($link,$sql))
    {
        // echo "<script>alert('record inserted')</script>";
        $extra="index.php";
        $host=$_SERVER['HTTP_HOST'];
        $uri=rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
        echo"<script>open('http://$host$uri/$extra','_self')</script>";
    }	

    else{
        $error=mysqli_error($link);
        echo $error;
        
    }
    mysqli_close($link);
}
else if(isset($_GET['action']))
    {
        $id=$_GET["id"];
        $sql="delete from tblempdata  where id='$id'";
        if(mysqli_query($link,$sql))
        {
             echo "<script>alert('Record Deleted')</script>";
             $extra="index.php";
             $host=$_SERVER['HTTP_HOST'];
             $uri=rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
             echo "<script>open('http://$host$uri/$extra','_self')</script>"; 
        }
        else
        {
             $error = mysqli_error($link);
             echo $error;

        }
        
    }
?>
