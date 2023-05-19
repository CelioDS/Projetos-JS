let form = document.getElementById("form");
let reponse = document.getElementById("response");




form.addEventListener("change", async (evento) => {
    evento.preventDefault();

    const form_data = new FormData(form);


    const responseHTTP = await fetch("api.php", {
        method: "POST",
        body: form_data
    }).then(response=> response.json())
    .then(data => data)

    console.log(responseHTTP)
    reponse.innerHTML = `
  <strong>
  ${responseHTTP}
  </strong>
`
})