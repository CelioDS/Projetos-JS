
const array = [10, 5, 2, 3, 4, 6, 456, 41]

var elemento_pai = document.body; //elemento pai
var teste = document.createElement('h2') // elemento filho
elemento_pai.appendChild(teste);


array.forEach(function (numero, index, array) {
    if (index === 0) {
        console.log('valor do array ' + numero)
        console.log('index do valor ' + index)
        console.log('array completo ' + array)
    }
})
