<?php 
    require("proj_init.php");
    $id = $_POST['txtid'];
    $sql = "delete from tblempdata where Id = '$id'";
    $res = mysqli_query($link,$sql);
    $sql = "SET  @num := 0";
    $res = mysqli_query($link,$sql);
    $sql = "UPDATE tblempdata SET id = @num := (@num+1)";
    $res = mysqli_query($link,$sql);
    $sql = "ALTER TABLE `tblempdata` AUTO_INCREMENT = 1";
    $res = mysqli_query($link,$sql);
    echo "Deleted";
?>