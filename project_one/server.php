<?php 
    require("proj_init.php");
    
    $name = $_POST['txtname'];
    $NewId = 0;
    $i=0;
    while($name[$i] != '.'){
        $NewId =  10 * $NewId + ($name[$i]-'0');
        $i++;
    }
    if($_POST['page'] == "city"){
        $sql = "select state from state where `user id` = '$NewId'";
    }else if($_POST['page'] == "area"){
        $state = $_POST['txtstate'];
        $sql = "select City from city where `User Id` = '$NewId' and State = '$state'";
    }else{
        
    }
    $res=mysqli_query($link,$sql);
    while($r=mysqli_fetch_array($res)){
        echo "," . $r[0] . "";
    };
?>