<?php
require("dbcon.php");
if(isset($_POST['submit']))
{
    $id=$_POST["txtid"];
    $state=$_POST["txtstate"];
   
    
    $sql="insert into tblstatedata values('$id','$state')";
    if(mysqli_query($link,$sql))
    {
        // echo "<script>alert('record inserted')</script>";
        $extra="state.php";
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
        $sql="delete from tblstatedata  where id='$id'";
        if(mysqli_query($link,$sql))
        {
             echo "<script>alert('Record Deleted')</script>";
             $extra="state.php";
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
