let h1 = document.querySelector('h1')

h1.innerHTML = 'teste'


var elemento_pai = document.body; //elemento pai
var teste = document.createElement('h2') // elemento filho
elemento_pai.appendChild(teste);
