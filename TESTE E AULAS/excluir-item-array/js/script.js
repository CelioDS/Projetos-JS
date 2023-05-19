let h1 = document.querySelector('h1')

h1.innerHTML= 'f'

var array = [
    { marca : 'vw', motor: 2.0},
    { marca : 'fiat', motor: 1.0},
    { marca : 'bmw', motor: 3.0},
    { marca : 'ferrari', motor: 4.0},
];

console.log(array)
h1.innerHTML= array

function removerItem (arr, prop, value){
    return arr.filter(function (i) {
        return i[prop] !== value
    });
}

var array = removerItem(array, 'marca', 'bmw')
console.log(array)
h1.innerHTML= array