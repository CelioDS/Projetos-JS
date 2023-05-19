<?php

function getAdress()
{
   
    if (isset($_POST['cep'])) {
        $CEP = $_POST['cep'];

     
        $CEP = filterCep($CEP);

    
        if (isCep($CEP)) {
            $adress = GetAddressViaCep($CEP);
            // verificar se o cep esta cadastado
            if(property_exists($adress,  'erro')){
                $adress = AdressEmpty();
                $adress->cep = "CEP não cadastrado";
            }
        }
         else {
            $adress = AdressEmpty();
            $adress->cep = "CEP invalido";
        }
    }else{
        $adress = AdressEmpty();
    }
    return $adress;
}




// retorna 
function AdressEmpty(){
 // if x = 0 ?? 1
    // criar um objeto e atri os valores vazio
    return  (object)[
        'cep' => '',
        'logradouro' => '',
        'bairro'     => '',
        'localidade' => '',
        'uf'         => ''

    ];
}

//retorna uma string
function filterCep(string $CEP):string{
    // procurar o que nao e numero e substituir por nada
   return preg_replace('/[^0-9]/', '', $CEP);
}

//retorna um boleano
function isCep(string $CEP):bool{
    // faz match com valores se true faz o if
    return preg_match('/^[0-9]{5}-?[0-9]{3}$/', $CEP);
}

// Recebe um string o cep
function GetAddressViaCep(string $CEP){
    //faz a pesquisa do cep
     $url = "https://viacep.com.br/ws/{$CEP}/json/";

    //Array associativo , true
    return json_decode(file_get_contents($url));

}