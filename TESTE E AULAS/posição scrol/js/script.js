const p = document.querySelector("#posição");
const posição = p.getBoundingClientRect();

console.log(posição)


for (var item in posição) {

    // Buscar elemento pai
    var elemento_pai = document.body;
    // Criar elemento
    var posição1 = document.createElement('h5')
    // Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
    elemento_pai.appendChild(posição1);

    if (item !== 'toJSON') {
        posição1.innerHTML = item + ' = ' + posição[item]
        console.log(posição1)
    }


}