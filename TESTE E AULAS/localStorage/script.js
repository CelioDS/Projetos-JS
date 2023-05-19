var enviado = document.querySelector(".enviado")

function salvarForm(){
    if(typeof(Storage) !== "undefined") {

        if (localStorage.cont) {
            localStorage.cont = Number(localStorage.cont)+1;
            enviado.innerHTML = 'CADASTRADO'
        } else {
            localStorage.cont = 1;
            enviado.innerHTML = 'CADASTRADO'

        }
       
        cad = document.getElementById('nome').value + ';' + document.getElementById('idade').value;
        localStorage.setItem("cad_"+localStorage.cont,cad);

    } else {
        
    }
}

function lerForm(){
    for(cont = 1; cont <= localStorage.cont; cont++){
        ficha = localStorage.getItem('cad_'+cont);
        document.getElementById("cads").innerHTML += "Nome: " + ficha.split(";")[0] + ", " + "Idade: " + ficha.split(";")[1] + "<br>";
    }
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "gravar.php?q=" + document.getElementById("cads").innerHTML, true);
    xmlhttp.send();
}

