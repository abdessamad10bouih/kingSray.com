<?php
header("Access-Control-Allow-Origin: http://localhost:5173/profile");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
require_once('./config.php');
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$response = array();

if (!isset($_GET['id'])) {
    $response['success'] = false;
    $response['message'] = "ID is required";
    echo json_encode($response);
    exit;
}

$user_id = $_GET['id'];

try {
    $stmt = $conn->prepare("SELECT * FROM users WHERE id = :id");
    $stmt->bindParam(':id', $user_id, PDO::PARAM_INT);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($user) {
        $response['success'] = true;
        $response['data'] = $user;
    } else {
        $response['success'] = false;
        $response['message'] = 'User not found';
        
    }
} catch (PDOException $e) {
    $response['success'] = false;
    $response['message'] = 'Database error: ' . $e->getMessage();
}

echo json_encode($response);
exit;
