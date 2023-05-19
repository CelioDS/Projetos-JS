// Buscar elemento pai
var elemento_pai = document.body;
// Criar elemento
var milesgundos = document.createElement('h2')
// Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
elemento_pai.appendChild(milesgundos);

var data = new Date();//timestamp
milesgundos.innerHTML = data.getTime() + ' milesegundos';// varios metodos para traabalhar com data


var segundos = document.createElement('h2')
elemento_pai.appendChild(segundos);


segundos.innerHTML = Math.floor(+new Date() / 1000) + ' segundos'


var ano = document.createElement('h2')
elemento_pai.appendChild(ano);


ano.innerHTML = data.getFullYear() + ' ano'