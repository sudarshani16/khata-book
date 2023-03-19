<?php
// Database connection parameters
$host = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = mysqli_connect($host, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create database

$db_name = "kbook";
$result = mysqli_query($conn, "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '$db_name'");
if (mysqli_num_rows($result) > 0) {
    // echo "Database exists";
    $link=mysqli_connect($host,$username,$password,$db_name);
} else {
    $sql = "CREATE DATABASE $db_name";
    mysqli_query($conn, $sql);
    $link=mysqli_connect($host,$username,$password,$db_name);
    $sql = "CREATE TABLE `tblempdata` ( `Id` int(11) NOT NULL AUTO_INCREMENT, `Name` varchar(30) NOT NULL, `Address` varchar(50) NOT NULL, `State` varchar(50) NOT NULL, `City` varchar(30) NOT NULL, `Area` varchar(50) NOT NULL, `Mobile No` varchar(50) NOT NULL, `Balance` int(11) NOT NULL, `User Type` varchar(50) NOT NULL, PRIMARY KEY (`Id`) ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4";
    mysqli_query($link, $sql);
    $sql = "CREATE TABLE `state` ( `User Id` int(11) NOT NULL, `User Name` varchar(50) NOT NULL, `State` varchar(50) DEFAULT NULL, KEY `fk_state` (`User Id`), CONSTRAINT `fk_state` FOREIGN KEY (`user id`) REFERENCES `tblempdata` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4";
    mysqli_query($link, $sql);
    $sql = "CREATE TABLE `city` ( `User Id` int(11) NOT NULL, `User Name` varchar(50) NOT NULL, `State` varchar(50) NOT NULL, `City` varchar(50) NOT NULL, KEY `fk_city` (`User Id`), CONSTRAINT `fk_city` FOREIGN KEY (`User Id`) REFERENCES `tblempdata` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4";
    mysqli_query($link, $sql);
    $sql = "CREATE TABLE `area` ( `User Id` int(11) NOT NULL, `User Name` varchar(50) NOT NULL, `State` varchar(50) NOT NULL, `City` varchar(50) NOT NULL, `Area` varchar(50) NOT NULL, KEY `fk_area` (`User Id`), CONSTRAINT `fk_area` FOREIGN KEY (`User Id`) REFERENCES `tblempdata` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4";
    mysqli_query($link, $sql);
    
}
// Close connection
?>
