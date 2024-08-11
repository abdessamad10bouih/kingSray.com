<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once('./config.php');
require 'vendor/autoload.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (!$email || !$password) {
        echo json_encode(['success' => false, 'error' => 'Missing email or password']);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'your_email@gmail.com';
        $mail->Password = 'your_password';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('your_email@gmail.com', 'Hotel KingsRay');
        $mail->addAddress($email, '');

        $otp = rand(100000, 999999);
        $mail->isHTML(true);
        $mail->Subject = 'Your OTP Code';
        $mail->Body = "Your OTP code is <strong>$otp</strong>";
        $mail->AltBody = "Your OTP code is: $otp";

        if ($mail->send()) {
            echo json_encode(['success' => true, 'otp' => $otp]);
        } else {
            echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);
        }
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'error' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method']);
}
