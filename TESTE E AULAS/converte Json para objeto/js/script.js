var elemento_pai = document.body;
var nomeObj = document.createElement('h2')
var profissaoObj = document.createElement('h2')
var idadeObj = document.createElement('h2')
var Obj = document.createElement('h2')

elemento_pai.appendChild(nomeObj);
elemento_pai.appendChild(profissaoObj);
elemento_pai.appendChild(idadeObj);
elemento_pai.appendChild(Obj);

//JSON -> objeto
// Classe JSON
//JSON <-> objeto

const json = '{"nome":"celio","profissao":"Programador","idade":"24"}';

const data = JSON.parse(json) // converte em objeto

nomeObj.innerHTML = data.nome
profissaoObj.innerHTML = data.profissao
idadeObj.innerHTML = data.idade


// strinfify
const paraJson = JSON.stringify(data)
Obj.innerHTML = paraJson //JSON











