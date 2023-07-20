const url = "https://viacep.com.br/ws/01001000/json/";

let h1 = document.querySelector("h1");
h1.innerHTML = "teste";
var elemento_pai = document.body;
var teste = document.createElement("h2");
elemento_pai.appendChild(teste);

//get all post
async function getAllPost() {
  // primeira resposta da api
  const response = await fetch(url);

  const status = response.status;

  if (status === 200) {
    const data = await response.json();
    console.log(data);
  } else {
    console.log(response);
  }
}
getAllPost(url);

fetch(`https://viacep.com.br/ws/01001000/json/`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    Object.keys(data).forEach((key) => {
      var teste = document.createElement("li");
      elemento_pai.appendChild(teste);
      teste.innerHTML = key + " " + data[key];
    });
  })
  .catch((error) => {
    console.error("Ocorreu um erro ao consumir a API: ", error);
  });

fetch(`https://businesshere.onrender.com`)
  .then((response) => {


    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Ocorreu um erro ao consumir a APIa: ", error);
  });
