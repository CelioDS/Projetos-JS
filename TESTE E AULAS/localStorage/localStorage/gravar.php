<?php
$fp = fopen("cadastros.txt", "w");
$escreve = fwrite($fp, str_replace("<br>","\r\n",$_GET['q']));
fclose($fp);
?>