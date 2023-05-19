var elemento_pai = document.body; //elemento pai
var teste = document.createElement('h2') // elemento filho
elemento_pai.appendChild(teste);

const animal = {
    especie: "gato",
    nome: 'bob',
    idade: 7,
    peso: 15
}

for(var index in animal){
    console.log(index + ' = ' + animal[index])
}