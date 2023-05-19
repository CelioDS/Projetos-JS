<?php

$usuario = $_POST['user'];
$senha = $_POST['pass'];



if($usuario === '' || $senha === ""){
    echo json_encode('todos os campos nedd ser preenchidos');
}else{
    echo json_encode("sucessooooooooo
    ");
}
exit;
?>