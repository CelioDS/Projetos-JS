let h1 = document.querySelector('h1')
h1.innerHTML = 'teste'


// Buscar elemento pai
var elemento_pai = document.body;
// Criar elemento
var igual = document.createElement('h2')
// Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
elemento_pai.appendChild(igual);


function isEqual(value1, value2) {
    // Criar elemento
    var igual = document.createElement('h2')
    // Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
    elemento_pai.appendChild(igual);

    return igual.innerHTML = 'E igual? ' + (value1 == value2)
}

isEqual(10, 10)


const array = [1,1,2,2,3,3,4,4,5,5]

function RemoverDuplicate(array) {
    let newArray = []
    var resultado = document.createElement('h2')// Criar elemento
    elemento_pai.appendChild(resultado); //inseri no pai
    
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) === i) {
            newArray.push(array[i])
        }
    }

    return resultado.innerHTML = 'for = '+ newArray

}

console.log(RemoverDuplicate(array))


function remover(array) {
    var resultado = document.createElement('h2')// Criar elemento
    elemento_pai.appendChild(resultado); //inseri no pai

    return  resultado.innerHTML = 'filter / indexOf = '+ array.filter((value, index) => {
        return  array.indexOf(value) === index
    })
}

console.log(remover(array))

function rem(array) {
    var resultado = document.createElement('h2')// Criar elemento
    elemento_pai.appendChild(resultado); //inseri no pai

    return  resultado.innerHTML = 'new SET = '+[...new Set(array)]
}


console.log(rem(array))




