<?php 
    require("dbcon.php");
    
    $name = $_POST['txtname'];
    $NewId = 0;
    $i=0;
    while($name[$i] != '.'){
        $NewId =  10 * $NewId + ($name[$i]-'0');
        $i++;
    }
    $sql = "select state from state where `user id` = '$NewId'";
    $res=mysqli_query($link,$sql);
    while($r=mysqli_fetch_array($res)){
        echo "," . $r[0] . "";
    };
?>