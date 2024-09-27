<?php
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);

if (!empty($data['title']) && !empty($data['content'])) {
    $newArticle = [
        "title" => $data['title'],
        "content" => $data['content']
    ];

    $jsonFile = 'articles.json';
    $currentData = json_decode(file_get_contents($jsonFile), true);
    $currentData['articles'][] = $newArticle;

    file_put_contents($jsonFile, json_encode($currentData));
    echo json_encode(['message' => 'Article published successfully']);
} else {
    echo json_encode(['error' => 'Invalid input']);
}
?>
