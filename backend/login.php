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

// Check if username or email already exists
$checkStmt = $conn->prepare("SELECT COUNT(*) FROM users WHERE username = :username OR email = :email");
$checkStmt->bindParam(':username', $username);
$checkStmt->bindParam(':email', $email);
$checkStmt->execute();

$count = $checkStmt->fetchColumn();

if ($count > 0) {
    // If either username or email exists, return an error
    $response['success'] = false;
    $response['message'] = "L'email ou le nom d'utilisateur est déjà utilisé.";
} else {
    // If neither exists, proceed with the insertion
    $stmt = $conn->prepare("INSERT INTO users(username, email, pass) VALUES (:username, :email, :pass)");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':pass', $hatchedPass);

    if ($stmt->execute()) {
        $response['success'] = true;
        $response['message'] = "Inscription réussie";
    } else {
        $response['success'] = false;
        $response['message'] = "Erreur d'inscription: " . implode(" ", $stmt->errorInfo());
    }
}

// Return the response as JSON
echo json_encode($response);
