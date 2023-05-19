let h1 = document.querySelector('h1')

h1.innerHTML = 'teste'

// Buscar elemento pai
var elemento_pai = document.body;
var indice = document.createElement('h2')
var valor = document.createElement('h2')
var text = document.createElement('h2')

elemento_pai.appendChild(indice);
elemento_pai.appendChild(valor);
elemento_pai.appendChild(text);

const select = document.getElementById('options')


indice.innerHTML = select.selectedIndex   + ' = indice'
valor.innerHTML = select.value + ' = valor'
text.innerHTML = select.options[select.selectedIndex].text + ' = texto'

