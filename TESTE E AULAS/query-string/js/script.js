let h1 = document.querySelector('h1')

h1.innerHTML= 'f'

const urlParametros = new URLSearchParams(window.location.search);



const nomes = urlParametros.get("nome");
h1.innerHTML= nomes

console.log(window.location.search)

