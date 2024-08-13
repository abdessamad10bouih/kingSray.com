<?php 

require_once('./config.php');

if (isset($_POST["registre"]) && $REQUEST_METHODE["POST"]){
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];



    $stmt = $conn->prepare("INSERT INTO users(nom, email, pass, ");

}
