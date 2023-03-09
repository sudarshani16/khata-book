<?php
require("dbcon.php");
if(isset($_POST['submit']))
{
    $id=$_POST["txtid"];
    $state=$_POST["txtstate"];
    $city=$_POST["txtcity"];
   
    
    $sql="insert into tblcity_data values('$id','$state','$city')";
    if(mysqli_query($link,$sql))
    {
        // echo "<script>alert('record inserted')</script>";
        $extra="city.php";
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
        $sql="delete from tblcity_data  where id='$id'";
        if(mysqli_query($link,$sql))
        {
             echo "<script>alert('Record Deleted')</script>";
             $extra="city.php";
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
