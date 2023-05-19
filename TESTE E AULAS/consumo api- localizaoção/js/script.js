fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    console.log(`O endereço IP do usuário é: ${data.ip}`);

    const userIP = data.ip;
    const KeyAPI = "b19ca25db81d2d8c44c67e1fcf190d33";

    fetch(`http://api.ipstack.com/${userIP}?access_key=${KeyAPI}&format=1`)
      .then((response) => response.json())
      .then((data) => {
        console.log(`sua cidade aprximada: ${data.city},`);
      });
  });

const cidadeAtual = async () => {
  const dataIP = await fetch("https://api.ipify.org?format=json");
  const reponse = await dataIP.json();

  const userIP = reponse.ip;
  const KeyAPI = "aa3cf1216a761d6058cf0bc9f6f48543";

  const cidadeIP = await fetch(
    `http://api.ipstack.com/${userIP}?access_key=${KeyAPI}&format=1`
  );

  const reponseIP = await cidadeIP.json();
  console.log(reponseIP);
  return reponseIP;
};

cidadeAtual();

//********          API IMAGENS ************************** */

const imagem = document.querySelector("#foto");

async function localização() {
  async function paises() {
    const paises = "BR";
    apiCountry = `https://servicodados.ibge.gov.br/api/v1/paises/${paises}`;
    const response = await fetch(apiCountry);
    const paisInt = await response.json();
    const pais = paisInt[0].nome["abreviado-EN"];

    return pais;
  }
  const paisApi = await paises();

  const keyApiPixbay = "27888343-eacefd03f5f5392acf48457df";
  const pais = paisApi;
  const response = await fetch(
    `https://pixabay.com/api/?key=${keyApiPixbay}&q=Country+${pais}&image_type=photo`
  );

  const data = await response.json();

  tamanhoDoAray = data.hits.length;
  const numeroSorteado =
    Math.floor(Math.random() * (tamanhoDoAray - 1 + 1)) + 0;
  console.log(numeroSorteado);
  const foto = data.hits[numeroSorteado].webformatURL;

  imagem.setAttribute("src", foto);
}

localização(imagem);
