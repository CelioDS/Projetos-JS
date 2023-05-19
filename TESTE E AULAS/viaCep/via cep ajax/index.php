<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    <title>Document</title>
</head>

<body>



    <div>

        nome <input type="text">
        <p>Digite o cep encontadar</p>
        <input type="text" placeholder="digite um cep...." id="cep" name="cep" value="<?php echo $adress->cep ?? '' ?>">
        <input type="text" id="logradouro" placeholder="rua" name="rua" value="<?php echo $adress->logradouro ?? '' ?>">
        <input type="text" id="bairro" placeholder="bairro" name="bairro" value="<?php echo $adress->bairro ?? '' ?>">
        <input type="text" id="localidade" placeholder="cidade" name="cidade" value="<?php echo $adress->localidade ?? "" ?>">
        <input type="text" placeholder="estado" id="uf" name="estado" value="<?php echo $adress->uf ?? '' ?>">
        <input id="btn" type="submit">

    </div>








</body>
<script src="ajax.js"></script>

</html>