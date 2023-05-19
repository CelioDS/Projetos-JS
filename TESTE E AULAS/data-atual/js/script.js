let h1 = document.querySelector('h1')
h1.style.fontSize = '25px'

var elemento_pai = document.body;
var teste = document.createElement('h2')
var dia = document.createElement('h2')
var mes = document.createElement('h2')
var year = document.createElement('h2')


elemento_pai.appendChild(year);
elemento_pai.appendChild(teste);
elemento_pai.appendChild(dia);
elemento_pai.appendChild(mes);




setInterval(function () {

    const data = new Date()
    const dia = String(data.getDate()).padStart(2,'0') // adicionar o 0
    const mes = String(data.getMonth()+1).padStart(2,'0')
    const ano = String(data.getFullYear())

    h1.innerHTML = data

    year.innerHTML = `${dia}/${mes}/${ano}`







}, 1000)
