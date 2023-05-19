<?php

$host = 'Localhost';
$username = 'root';
$password =  '';
$bdnome =  'bancojogo';

$conexao = new mysqli($host, $username, $password, $bdnome);
if ($conexao->connect_errno){
    echo"erro: (".$conexao->connect_errno.")".$conexao->connect_errno;
}else{
    echo 'Conectado';
}



?>

<?php


?>