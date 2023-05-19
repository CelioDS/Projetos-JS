<?php

include_once("viacepfun.php");

$adress = getAdress();

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

    <form action="" method="POST">
        <p>Digite o cep encontadar</p>
        <input type="text" placeholder="digite um cep...." name="cep" value="<?php echo $adress->cep ?? '' ?>">
        <input type="text" placeholder="rua" name="rua" value="<?php echo $adress->logradouro  ?>">
        <input type="text" placeholder="bairro" name="bairro" value="<?php echo $adress->bairro  ?>">
        <input type="text" placeholder="cidade" name="cidade" value="<?php echo $adress->localidade  ?>">
        <input type="text" placeholder="estado" name="estado" value="<?php echo $adress->uf  ?>">
        <input type="submit">


    </form>






</body>

</html>