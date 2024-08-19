<?php
header("Access-Control-Allow-Origin: http://localhost:5173/login");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

require_once('./config.php');

$response = array();

$username = $_POST["username"];
$email = $_POST["email"];
$pass = $_POST["pass"];
$hatchedPass = password_hash($pass, PASSWORD_DEFAULT);

$userNamestmt = $conn->prepare('SELECT * FROM users WHERE username = :username');
$userNamestmt->bindParam(':username', $username);
$userNamestmt->execute();
$userNameCount = $userNamestmt->rowCount();

if ($userNameCount > 0) {
    $response['success'] = false;
    $response['message'] = 'Username already in use';
    echo json_encode($response);
    exit;
}
$userEmailstmt = $conn->prepare('SELECT * FROM users WHERE email = :email');
$userEmailstmt->bindParam(':email', $email);
$userEmailstmt->execute();
$userEmailCount = $userEmailstmt->rowCount();

if ($userEmailCount > 0) {
    $response['success'] = false;
    $response['message'] = 'Email already in use';
    echo json_encode($response);
    exit;
}

$stmt = $conn->prepare("INSERT INTO users(username, email, pass) VALUES (:username, :email, :pass)");
$stmt->bindParam(':username', $username);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':pass', $hatchedPass);

if ($stmt->execute()) {
    $response['success'] = true;
    $response['message'] = "Registration successful";
} else {
    $response['success'] = false;
    $response['message'] = "Registration error: " . implode(" ", $stmt->errorInfo());
}

echo json_encode($response);
