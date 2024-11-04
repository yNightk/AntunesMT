<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];
    // Processar o formulário (ex: enviar e-mail, salvar no banco de dados)
    echo "Obrigado pelo contato, $nome!";
}
?>
