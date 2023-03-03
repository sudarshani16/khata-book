<?php
require("dbcon.php");
if(isset($_POST['submit']))
{
    $id=$_POST["txtid"];
    $name=$_POST["txtname"];
    $date=$_POST["txtdate"];
    $city=$_POST["txtcity"];
    $amt=$_POST["txtamt"];
    
    $sql="insert into tblempdata values('$id','$name','$date','$city','$amt')";
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
