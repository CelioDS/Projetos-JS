<?php
include('conexao.php');

    $nome = $_POST['nome'];
    $pontos = +$_POST['pontos'];

    // ASPAS PARA NUMERO VARCHAR
    // 1 modo de enviar dados
    $result = mysqli_query($conexao, "INSERT INTO ranking(nome,pontos) VALUES('$nome','$pontos')");

    // 2 modo de enviar dados
    $comandosql = "INSERT INTO ranking(nome,pontos) VALUES('$nome','$pontos')";

    print_r('Nome: ' . $_POST['nome']);
    print_r('pontos: ' . $_POST['pontos']);

    //verifica e envia 
    if (mysqli_query($conexao, $comandosql)) {
        echo "Enviado com sucesso";
    } else {
        echo "ERRO no envio" . mysqli_connect_error($conexao);
    }


    //fechar conexao
    mysqli_close($conexao);
?>
