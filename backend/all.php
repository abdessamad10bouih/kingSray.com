<?php
require_once('./config.php');
header('Content-Type: application/json');

$query = "SELECT * FROM rooms";
$stmt= $conn->query($query);
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($rows);
