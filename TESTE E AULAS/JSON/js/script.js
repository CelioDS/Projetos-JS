let h1 = document.querySelector('h1')
var elemento_pai = document.body; //elemento pai
var JsonTeste = document.createElement('h2') // elemento filho
elemento_pai.appendChild(JsonTeste);

var obsTeste = document.createElement('h2') // elemento filho
elemento_pai.appendChild(obsTeste);

const obj = [
    {
        "nome": "celio",
        "profissao": "programador",
        "estaTrabalhando": "true",
        "detalhesProfissao": {
            "profissaoA": "programador",
            "empresa": "ibm"
        },
        "hobbies": [
            "programar",
            "academia"
        ],
    },
    {
        "nome": "celio2",
        "profissao": "programador2",
        "estaTrabalhando": "false",
        "detalhesProfissao": {
            "profissaoA": null,
            "empresa": null
        },
        "hobbies": [
            "programar",
            "academia"
        ],
    },
]

//Json
//converte para JSON
const JsonData = JSON.stringify(obj)

JsonTeste.style.fontSize = '15px'
JsonTeste.innerHTML = JsonData



//converter JSON para OBJ

const ObjData = JSON.parse(JsonData)
console.log(ObjData)

function printOBJ(objeto){
    for(let i in objeto){
        console.log(i, objeto[i])
    }
}

ObjData.map((pessoa) =>{
console.log(pessoa.hobbies)

})

