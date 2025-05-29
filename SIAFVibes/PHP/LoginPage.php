<?php
session_start();

// Database config
$host = 'localhost';
$dbname = 'SIAFVibes';
$username = 'root';
$password = '';

try {
    // Connect to database
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Check if form was submitted
    if (isset($_POST['email']) && isset($_POST['password'])) {
        $email = trim($_POST['email']);
        $password = $_POST['password'];

        // Check if account exists
        $stmt = $pdo->prepare("SELECT * FROM accounts WHERE email = :email");
        $stmt->execute([':email' => $email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            // Login success
            $_SESSION['account_id'] = $user['account_id'];
            $_SESSION['fullname'] = $user['fullname'];

            // Redirect to dashboard or homepage
            header("Location: ../Maindashboard.html"); // Change to your actual page
            exit();
        } else {
            echo "Invalid email or password.";
        }
    } else {
        echo "Please fill out both fields.";
    }
} catch (PDOException $e) {
    echo "Database error: " . $e->getMessage();
}
?>