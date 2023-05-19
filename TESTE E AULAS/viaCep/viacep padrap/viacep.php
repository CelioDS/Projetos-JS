
<?php

// if x = 0 ?? 1
// criar um objeto e atri os valores vazio
$adress = (object)[

    'localidade' => '',
    'uf'         => ''

];






if (isset($_POST['cep'])) {
    $CEP = $_POST['cep'];

    // procurar o que nao e numero e substituir por nada
    $CEP = preg_replace('/[^0-9]/', '', $CEP);

    // faz match com valores se true faz o if
    if (preg_match('/^[0-9]{5}-?[0-9]{3}$/', $CEP)) {
        //faz a pesquisa do cep
        $url = "https://viacep.com.br/ws/{$CEP}/json/";


        //array associativo , true
        $adress = json_decode(file_get_contents($url));
        if(property_exists($adress,  'erro')){
            $adress->cep = "CEP não cadastrado";
        }

        // tras os valores
        //var_dump($adress->localidade)
        //var_dump($adress)

    }else{
        $adress->cep = "CEP invalido";
                  
        
    }

}
