let h1 = document.querySelector('h1')

// Buscar elemento pai
var elemento_pai = document.body;

// Criar elemento
var titulo = document.createElement('h6')

// Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
elemento_pai.appendChild(titulo);

h1.innerHTML = 'teste'


var pessoas = {
    1: "celio",
    2: "celi",
    3: "cel",
    4: "ce",
};

//for each
Object.keys(pessoas).forEach(function (item) {
    console.log(item + '-' + pessoas[item])

  
    var elemento_pai = document.body;
    var lista = document.createElement('li')
    elemento_pai.appendChild(lista);

    lista.innerHTML = item + ' - ' + pessoas[item]

})


// for in
for(var item in pessoas){
    var elemento_pai = document.body;
    var lista = document.createElement('li')
    elemento_pai.appendChild(lista);

    lista.innerHTML = item + ' = ' + pessoas[item]

}

//object.entries 

for (var [key, value] of Object.entries(pessoas)){
    var elemento_pai = document.body;
    var lista = document.createElement('li')
    elemento_pai.appendChild(lista);

    lista.innerHTML = key + ' > ' + value
}