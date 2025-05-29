<?php
// Database config
$host = 'localhost';
$dbname = 'SIAFVibes';
$username = 'root';
$password = '';

function generateUUID() {
    return sprintf(
        '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        mt_rand(0, 0xffff), mt_rand(0, 0xffff), 
        mt_rand(0, 0xffff),
        mt_rand(0, 0x0fff) | 0x4000,
        mt_rand(0, 0x3fff) | 0x8000,
        mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
    );
}

try {
    // Connect to database
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Check if all required fields are submitted
    if (
        isset($_POST['fullname']) &&
        isset($_POST['email']) &&
        isset($_POST['password'])
    ) {
        $fullname = trim($_POST['fullname']);
        $email = trim($_POST['email']);
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $agreed_terms = isset($_POST['terms']) ? 1 : 0;
        $account_id = generateUUID();

        // Insert data into accounts table
        $stmt = $pdo->prepare("
            INSERT INTO accounts (account_id, fullname, email, password, agreed_terms)
            VALUES (:account_id, :fullname, :email, :password, :agreed_terms)
        ");

        if ($stmt->execute([
            ':account_id' => $account_id,
            ':fullname' => $fullname,
            ':email' => $email,
            ':password' => $password,
            ':agreed_terms' => $agreed_terms
        ])) {
            // Code to execute on success
            header("Location: /SIAFVibes/LoginPage.html");
            exit();
        } else {
        echo "Failed to create account.";
        }
    }
} catch (PDOException $e) {
    echo "Database error: " . $e->getMessage();
}
?>