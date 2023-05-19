
var elemento_pai = document.body;
var LocalS = document.createElement('h2')
var SessionS = document.createElement('h2')
var jsonS = document.createElement('h2')


elemento_pai.appendChild(LocalS);
elemento_pai.appendChild(SessionS);
elemento_pai.appendChild(jsonS);



// localStorage
localStorage.clear()
localStorage.setItem("nome",'Célio')
LocalS.innerHTML = localStorage.getItem('nome') + ' = localstorage'



// sessionsStorage quando fecha dados sao perdidos
sessionStorage.clear()
sessionStorage.setItem('nome','celio') 
SessionS.innerHTML = sessionStorage.getItem('nome') + ' = sessionstorage'



//salvar objeto
const person = {
    name: 'celio',
    age: 31,
    job: 'programador'
}
 
// transformado OBjeto em JSON e salvando no localStorage
localStorage.setItem('person', JSON.stringify(person)) 
jsonS.innerHTML = localStorage.getItem('person')+ ' = Json'

// pegando o Json e convertendo em Objeto
objStorage = localStorage.getItem('person')
objStorage1 = JSON.parse(objStorage)

// objeto 
Object.keys(objStorage1).forEach(function(item){

    var objS = document.createElement('h2')
    elemento_pai.appendChild(objS);
    objS.innerHTML = item + ' = ' + objStorage1[item]
});




