<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

require_once('./config.php');

$response = array(); // To hold response data

// Collect POST data
$username = $_POST["username"];
$email = $_POST["email"];
$pass = $_POST["pass"];
$hatchedPass = password_hash($pass, PASSWORD_DEFAULT);

// Prepare SQL statement
$stmt = $conn->prepare("INSERT INTO users(username, email, pass) VALUES (:username, :email, :pass)");
$stmt->bindParam(':username', $username);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':pass', $hatchedPass);

if ($stmt->execute()) {
    $response['success'] = true;
    $response['message'] = "Inscription reussie";
} else {
    $response['success'] = false;
    $response['message'] = "Erreur d'inscription: " . $stmt->errorInfo();
}


// Return the response as JSON
echo json_encode($response);
