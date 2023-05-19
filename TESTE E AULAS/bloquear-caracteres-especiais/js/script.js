let h1 = document.querySelector('h1')
var elemento_pai = document.body;
var teste = document.createElement('h2')

elemento_pai.appendChild(teste);

h1.innerHTML = 'teste'

const input = document.getElementById("name");

//adicionar evento - paste
input.addEventListener("paste", function () {
    const regex = new RegExp("^[0-9a-zA-Z\b]+$")
    const self = this
 
    setTimeout(function(){
        const text = self.value

        if(!regex.test(text))
        self.value = ''
    }, 10)


})


