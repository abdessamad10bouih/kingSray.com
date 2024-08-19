<?php
header("Access-Control-Allow-Origin: http://localhost:5173/login");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
require_once('./config.php');

$response = array();

$email = $_POST['email'];
$pass = $_POST['pass'];

$stmt = $conn->prepare('SELECT * FROM users WHERE email = :email');
$stmt->bindParam(':email', $email);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user === false) {
    $response['success'] = false;
    $response['message'] = 'User Not Found';
    echo json_encode($response);
    exit;
}

$hashedPass = $user['pass'];
if (password_verify($pass, $hashedPass)) {
    $response['success'] = true;
    $response['message'] = 'Login Successful';
} else {
    $response['success'] = false;
    $response['message'] = 'Incorrect Password';
}

echo json_encode($response);
exit;
