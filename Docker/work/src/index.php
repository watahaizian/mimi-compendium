<?php

$users = [];

// データベースに接続
$dsn = 'mysql:host=db;port=3306;dbname=sample';
$username = 'root';
$password = 'secret';
try {
    $pdo = new PDO($dsn, $username, $password);

    // user テーブルの中身を取得
    $statement = $pdo->query('SELECT * FROM user');
    $statement->execute();
    while ($row = $statement->fetch()) {
        // 1行ずつ配列に追加
        $users[] = $row;
    }

    // 切断
    $pdo = null;
} catch (PDOException $e) {
    echo 'データベースに接続できませんでした';
}

// ユーザー情報を出力
foreach ($users as $user) {
    echo '<p>id: ' . $user['id'] . ', name: ' . $user['name'] . '</p>';
}

// メールを送信
$subject = 'テストメールです';
$message = 'Docker Hubあこちら → https://hub.docker.com/';
foreach ($users as $user) {
    $success = mb_send_mail($user['email'], $subject, $message);
    if ($success) {
        echo '<p>' . $user['name'] . 'にメールを送信しました</p>';
    } else {
        echo '<p>' . $user['name'] . 'にメールを送信できませんでした</p>';
    }
}