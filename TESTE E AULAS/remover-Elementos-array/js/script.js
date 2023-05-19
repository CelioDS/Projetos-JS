let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')

h1.innerHTML= 'teste'

const array = [1,2,3,4,5,6,7,8,9,10]
h1.innerHTML= array

// splice - fatiamento de array
// indice inicial - quantos retirar
h2.innerHTML = array.splice(2,4) + ' removidos'
h3.innerHTML = array + ' atual'






