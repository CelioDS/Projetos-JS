<?php
include_once("viacep.php");
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
   
    <title>Document</title>
</head>

<body>

    <form  method="POST" id="form">
        <input type="text" placeholder="nome">
        <p>Digite o cep encontadar</p>
        <input type="text" placeholder="digite um cep...." id="cep" name="cep" value="<?php echo $adress->cep ?? '' ?>">
        <input type="text" placeholder="rua" name="rua" value="<?php echo $adress->logradouro ?? '' ?>">
        <input type="text" placeholder="bairro" name="bairro" value="<?php echo $adress->bairro ?? '' ?>">
        <input type="text" placeholder="cidade" name="cidade" value="<?php echo $adress->localidade ?? "" ?>">
        <input type="text" placeholder="estado" name="estado" value="<?php echo $adress->uf ?? '' ?>">
        <button id='btn' >enviar</button>

    </form>




</body>
<script src="script.js"></script>
</html>