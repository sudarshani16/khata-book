<?php
if(isset($_COOKIE["myCookie"])) {
    $value = $_COOKIE["myCookie"];
    echo "Cookie value is: " . $value;
} else {
    echo "Cookie not set.";
}
?>
