const footer = document.querySelector("#footer");
const alertErro = document.querySelector(".error");
const sectionApi = document.getElementById("sectionApi");
const photo = document.getElementById("photo");
const alertLoading = document.querySelector(".loading");
const sectionClima = document.getElementById("sectionClima");
const hora = document.querySelector(".hora");
const input = document.querySelector(".input-group-text");
const apiKey = "25fefdcf03b51ee166183041bd3ceb51";

let loops = 0;
const timeSet = 1000;

/**Inserindo ano */
function GetYear() {
  const ano = document.getElementById("ano");

  const data = new Date();
  const getYear = String(data.getFullYear());
  ano.textContent = getYear;

  setInterval(() => {
    const data = new Date();

    const horas = String(data.getHours()).padStart(2, "0");
    const minutos = String(data.getMinutes()).padStart(2, "0");
    const segundos = String(data.getSeconds()).padStart(2, "0");

    hora.textContent = `${horas}:${minutos}:${segundos}`;
  }, 1000);

  return hora.textContent;
}

GetYear();

async function apiPhoto() {
  const keyApiPixbay = "27888343-eacefd03f5f5392acf48457df";

  const climaArray = ["climate", "weather", "sky", "city"];
  const stringClima = Math.floor(Math.random() * climaArray.length);

  const response = await fetch(
    `https://pixabay.com/api/?key=${keyApiPixbay}&q=Country+${climaArray[stringClima]}&image_type=photo`
  );

  const data = await response.json();

  ArrayPhotoLength = data.hits.length;

  const numberRandom =
    Math.floor(Math.random() * (ArrayPhotoLength - 1 + 1)) + 0;
  const newPhoto = data.hits[numberRandom].webformatURL;

  photo.setAttribute("src", newPhoto);
}

async function apiWeather(cityChange) {
  try {
    //funções out
    apiPhoto();

    const { city } = await dados();

    const cityTrue = cityChange ? cityChange : city;

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityTrue}&units=metric&appid=${apiKey}&lang=pt_br`;

    const resquest = await fetch(apiWeatherURL);
    const data = await resquest.json();

    document.querySelector(
      ".city"
    ).innerHTML = `${data.name}, ${data.sys.country}`;

    document.querySelector(".tempMin").textContent = data.main.temp_min;
    document.querySelector(".temp").textContent = data.main.temp;
    document.querySelector(".tempMax").textContent = data.main.temp_max;
    document.querySelector(".vento").textContent = data.wind.speed;
    document.querySelector(".clima").textContent = data.weather[0].description;
    document.querySelector(
      ".climaImg"
    ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.querySelector(".humidade").textContent = data.main.humidity;

    /**fazer um função  */
    const weatherPhoto = document.querySelector(".weatherPhoto");

    // Função para gerar um valor aleatório entre um valor mínimo e máximo
    function gerarValorAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    /*************** estilo dimamico********************** */

    weatherPhoto.style.animation = "";
    function iniciarAnimacao() {
      if (loops === 0) {
        loops += 1;
        setloop = null;
        setloop = setInterval(() => {
          // Gerar valores aleatórios para largura e altura
          var larguraAleatoria = gerarValorAleatorio(100, 1500);
          var alturaAleatoria = gerarValorAleatorio(100, 1500);

          // Criar uma nova regra de estilo no cabeçalho do documento
          var estiloDinamico = document.createElement("style");
          estiloDinamico.innerHTML =
            "@keyframes tempo {" +
            "0% {" +
            "  left: 100%;" +
            "  width: " +
            larguraAleatoria +
            "px;" +
            "  height: " +
            alturaAleatoria +
            "px;" +
            "}" +
            "100% {" +
            "  left: -100%;" +
            "  width: 5px;" +
            "  height: 5px;" +
            "}" +
            "}";

          // Adicionar a regra de estilo dinâmico ao cabeçalho do documento

          document.head.appendChild(estiloDinamico);
        }, 30000);
      } else {
        loops -= 1;
        clearInterval(setloop);
      }
    }

    // Chamar a função para iniciar a animação

    const arrayWeatherPhoto = ["Clouds", "Mist", "Rain", "Clear", "Fog"];

    const ClimaAtual = arrayWeatherPhoto.find(
      (photo) => photo === data.weather[0].main
    );

    if (data.weather[0].main === "Rain") {
      weatherPhoto.style.animation = "Rain 10s infinite linear";
    }
    //arrumar aqui
    if (data.weather[0].main === "Clouds" || data.weather[0].main === "Mist") {
      iniciarAnimacao();
    }
    if (data.weather[0].main === "Clear") {
      const data = new Date();
      const horas = String(data.getHours()).padStart(2, "0");
      const isDay = horas >= 6 && horas < 18;

      weatherPhoto.style.width = "150px";
      weatherPhoto.style.height = "150px";
      weatherPhoto.style.animation = "astros 40s infinite linear";

      if (isDay) {
        weatherPhoto.setAttribute("src", `img/Clear0.png`);
      } else {
        weatherPhoto.setAttribute("src", `img/${ClimaAtual}.png`);
      }
    } else {
      weatherPhoto.setAttribute("src", `img/${ClimaAtual}.png`);
    }

    document.getElementById("erroCity").style.display = "none";
  } catch (error) {
    alertErro.style.display = "flex";
    footer.style.display = "none";
    info.style.display = "none";
    console.error("Ocorreu um erro na função dados:", error);
    const loop = setInterval(() => {
      alertErro.style.display = "none";
      footer.style.display = "flex";
      document.getElementById("erroCity").style.display = "flex";

      clearInterval(loop);

      return loop;
    }, 2000);
  }
}

apiWeather();

async function dados() {
  const keyApiIp = "5ee78564d91655";

  try {
    //tira loading
    setTimeout(() => {
      alertLoading.style.display = "none";
      info.style.display = "flex";
      footer.style.display = "flex";
      if (alertErro.style.display === "flex") {
        footer.style.display = "none";
      } else {
        footer.style.display = "flex";
      }
    }, timeSet);

    const request = await fetch(`https://ipinfo.io/json?token=${keyApiIp}`);
    const jsonResponse = await request.json();
    return jsonResponse;
  } catch (error) {
    alertErro.style.display = "flex";
    footer.style.display = "none";
    console.error("Ocorreu um erro na função dados:", error);
    return null; // ou qualquer valor padrão que você queira retornar em caso de erro
  }
}

async function exibirDados() {
  // Obter os dados da API
  const responseApi = await dados();

  // Mapear as classes dos elementos HTML aos seus respectivos seletores
  const elements = {
    city: document.querySelector(".city"), // Elemento para a cidade
    region: document.querySelector(".city"), //
    country: document.querySelector(".city"), //
    ip: document.querySelector(".ip"), //
    loc: document.querySelector(".loc"), //
    org: document.querySelector(".org"), //
    postal: document.querySelector(".post"), //
    timezone: document.querySelector(".timezone"), //
  };

  // Iterar sobre os elementos e atribuir os valores correspondentes
  Object.entries(elements).forEach(([key, element]) => {
    const value = responseApi[key]; // Obter o valor correspondente da resposta da API
    // Atualizar o conteúdo do elemento com o valor, incluindo um título formatado

    if (key === "city" || key === "country" || key === "region") {
      element.innerHTML += ` ${value} `;
    } else {
      element.innerHTML = `${key.toUpperCase()} : <span>${value}</span>`;
    }
  });
}
// Chamar a função para exibir os dados
exibirDados();

/**digita */
const titulo = document.getElementById("Digitalização");

function typeWrite(texto) {
  const textoArray = texto.innerHTML.split("");
  titulo.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      titulo.innerHTML += letra;
    }, 100 * i);
  });
}

setTimeout(() => {
  typeWrite(titulo);
}, timeSet);

const cidade = document.getElementById("cidade");
cidade.addEventListener("change", (e) => {
  e.preventDefault();
  apiWeather(e.target.value);
  input.style.animation = "";
  input.childNodes[1].style.color = "grey";
});

cidade.addEventListener("click", (e) => {
  e.preventDefault();
  input.style.animation = "splin 1s infinite linear";
  input.childNodes[1].style.color = "green";
});
