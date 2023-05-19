var pessoas = [
    {
        nome: "celio",
        idade: 24
    },
    {
        nome: "dayane",
        idade: 20
    },
    {
        nome: "ricardo",
        idade: 22
    },
    {
        nome: "jeferson",
        idade: 23
    }
];

pessoas.sort(function( a, b){
    if(a.idade < b.idade){
        return -1;
    }
    else{
        return true;
    }
});

console.log(pessoas)