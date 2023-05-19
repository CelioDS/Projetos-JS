let h1 = document.querySelector('h1')

h1.innerHTML = 'teste'

var elemento_pai = document.body;
var boleanX = document.createElement('h2')
var boleanY = document.createElement('h2')

elemento_pai.appendChild(boleanX);
elemento_pai.appendChild(boleanY);


const x = 'true'
const y = 'false'

//converssao de tippo
const xBolean = (x === 'true')
boleanX.innerHTML = xBolean + ' = '+ typeof(xBolean)

const yBolean = (x === "true")
boleanY.innerHTML = yBolean + ' = '+ typeof(xBolean)
