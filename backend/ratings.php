<?php
require_once('./config.php');
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$query = 'SELECT * FROM ratings';
$stmt = $conn->query($query);
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($rows);
