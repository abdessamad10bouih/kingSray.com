<?php
header("Access-Control-Allow-Origin: http://localhost:5173/login");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization, multipart/form-data");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

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
$userId = $user['id'];
if (password_verify($pass, $hashedPass)) {
    $response['success'] = true;
    $response['message'] = 'Login Successful';
    $response['id'] = $userId;
} else {
    $response['success'] = false;
    $response['message'] = 'Incorrect Password';
}

echo json_encode($response);
exit;
