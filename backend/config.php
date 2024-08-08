<?php

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'gestion hotel';

    try {
        $conn = new PDO("mysql:host=$host; dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo 'connexion réussi';
    }catch (PDOException $e){
        echo 'ERROR: ' . $e->getMessage();
    }

?>
