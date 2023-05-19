let h1 = document.querySelector('h1')

h1.innerHTML = 'teste'


var arrayObjetos = [
    {id: 1, name: 'celio'},
    {id: 2, name: 'celi'},
    {id: 3, name: 'cel'},
    {id: 4, name: 'ce'},
];


// array de arrays
var array = arrayObjetos.map(function(obj){
    return Object.keys(obj).map(function(key){
        return obj[key]
    })

})

for(let i = 0; i < array.length; i++){

    var elemento_pai = document.body;
    // Criar elemento
    var h2 = document.createElement('h2')
    // Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
    elemento_pai.appendChild(h2);
    h2.innerHTML = array[i]

    console.log(array)

}
