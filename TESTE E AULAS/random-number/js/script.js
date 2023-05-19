let h1 = document.querySelector('h1')

h1.innerHTML = 'teste'

// Buscar elemento pai
var elemento_pai = document.body;
// Criar elemento
var teste = document.createElement('h2')
// Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
elemento_pai.appendChild(teste);


function RandomNumber(a, b){
    return Math.floor(Math.random() * 10 +1)
}

setInterval(() => {
    h1.innerHTML = RandomNumber(10,5)
}, 1000);