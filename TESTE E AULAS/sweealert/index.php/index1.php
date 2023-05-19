<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="swet.js"></script>
    <script src="script.js" defer></script>
</head>

<body>



    <?php
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
    
    alerta("success", "cadastradao", "bem vindo");
    ?>

</body>

</html>