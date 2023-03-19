<?php 
    require("proj_init.php");
    include '_variables.php';
    if($_POST['page'] == "home"){
        $id = $_POST['txtid'];
        $sql = "delete from tblempdata where Id = '$id'";
        $res = mysqli_query($link,$sql);
        $sql = "SET  @num := 0";
        $res = mysqli_query($link,$sql);
        $sql = "UPDATE tblempdata SET id = @num := (@num+1)";
        $res = mysqli_query($link,$sql);
        $sql = "ALTER TABLE `tblempdata` AUTO_INCREMENT = 1";
        $res = mysqli_query($link,$sql);
    }else if($_POST['page'] == "state"){
        $sql = "delete from state where `User Id` = '$id' and State = '$state'";
        $res = mysqli_query($link,$sql);
        $sql = "delete from city where `User Id` = '$id' and State = '$state'";
        $res = mysqli_query($link,$sql);
        $sql = "delete from area where `User Id` = '$id' and State = '$state'";
        $res = mysqli_query($link,$sql);
    }else if($_POST['page'] == "city"){
        $sql = "delete from city where `User Id` = '$id' and State = '$state' and City = '$city'";
        $res = mysqli_query($link,$sql);
        $sql = "delete from area where `User Id` = '$id' and State = '$state' and City = '$city'";
        $res = mysqli_query($link,$sql);
    }else if($_POST['page'] == "city"){
        $sql = "delete from city where `User Id` = '$id' and State = '$state' and City = '$city' and Area = '$area'";
        $res = mysqli_query($link,$sql);
    }
?>