let form = document.getElementById("form");


const rua = document.getElementById("rua");
let cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");


form.addEventListener("change", async (evento) => {
  evento.preventDefault();

  const form_data = new FormData(form);


  const responseHTTP = await fetch("viacep.php", {
    method: "POST",
    body: form_data
  }).then(response => response.json())
    .then(data => data)


  console.log(responseHTTP)


  bairro.innerHTML = responseHTTP.bairro
  cidade.innerHTML = responseHTTP.localidade
  estado.innerHTML = responseHTTP.uf

})

