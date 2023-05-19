<?php
require_once("sweet.html");
function alerta($type, $title, $mensagem)
{

    echo "<script type='text/javascript'>
    
    Swal.fire({
    icon: '$type',
    title: '$title',
    text:  '$mensagem',
    showConfirmButton: false,
    timer: 1500
    });
    
    </script>";
}
$nome = 'eeu';


if ($nome === 'eu') {
    echo alerta("success", "Cadastrado com suscesso", "bem vindo");
}
else{
    echo alerta("error", "Cadastrado com suscesso", "bem vindo");
}
