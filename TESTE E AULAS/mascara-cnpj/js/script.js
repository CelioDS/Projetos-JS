let h1 = document.querySelector('h1')
h1.innerHTML= 'teste'

// Buscar elemento pai
var elemento_pai = document.body;
// Criar elemento
var cnpj1 = document.createElement('h2')
// Inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
elemento_pai.appendChild(cnpj1);


//espresaao regular

var cnpj = "37356542000101";

//   replace
const expressaoRegular =  /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;
const padraoMascara =  "$1.$2.$3.$4-$5";


cnpj1.innerHTML = cnpj.replace(expressaoRegular, padraoMascara);


