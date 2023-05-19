let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')

h1.innerHTML= 'f'

var array = [1,2,3,4,5,6]
var soma = 0

// for
for (var i = 0; i < array.length; i++ ){
 soma += array[i];
 console.log('rodando')
}

h1.innerHTML= soma

// reduce
var soma2 = array.reduce(function(soma, i){
    console.log('rodando 1')
    return soma + i
})

h2.innerHTML = soma2

