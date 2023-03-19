<?php 
    require("dbcon.php");
    $sql = "SHOW CREATE TABLE area";
    $res=mysqli_query($link,$sql);
    $r=mysqli_fetch_array($res); 
    echo $r[0] ." <br>" .$r[1];
    mysqli_close($link);
?>