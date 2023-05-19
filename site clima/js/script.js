// Variaveis e seleção de elementos
const apiKey = "25fefdcf03b51ee166183041bd3ceb51";
const apiCountryURL = "https://flagsapi.com/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature");
const descElement = document.querySelector("#description");
const weatherElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidtyElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");
const weatherContainer = document.querySelector("#weather-data");

const seuLocal = document.querySelector(".seu-local");

const erro = document.querySelector(".erro");
const nomeErro = document.querySelector(".nome-erro");
const backgroundPaises = document.querySelector("#background");

const formCep = document.querySelector(".cep-form");

const formCepInput = document.querySelector(".cep-form input");

//Funções

// get data cliente/usuario
async function localCliente() {
  const localCep = document.querySelector(".local-cep");
  const localCity = document.querySelector(".local-city");

  const keyApiIp = "5ee78564d91655";
  const request = await fetch(`https://ipinfo.io/json?token=${keyApiIp}`);
  const jsonResponse = await request.json();

  showWeatherData(jsonResponse.city);

  localCity.textContent = jsonResponse.city;
  localCep.textContent = jsonResponse.postal;
}
localCliente();

async function viaCepApi(cepValido) {
  const ApiViaCep = `https://viacep.com.br/ws/${cepValido}/json/`;
  const response = await fetch(ApiViaCep);
  const responseData = await response.json();
  return responseData;
}

// get data
const getWeatherData = async (city) => {
  try {
    const cityRegex = /^[a-zA-ZÀ-ÿ\s-]+$/;

    function isValidCity(city) {
      if (cityRegex.test(city)) {
        return city;
      } else {
        console.error(`Invalid city name: ${city}`);
        erro.classList.remove("hide");
      }
    }
    const cityOK = isValidCity(city) ? isValidCity(city) : "";

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityOK}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiWeatherURL);

    if (res.status === 200) {
      const data = await res.json();
      return data;
    } else {
      console.error("Cidade nao existe");
      ClassToggle(erro, backgroundPaises, weatherContainer);
    }
  } catch (error) {
    ClassToggle(erro, backgroundPaises, weatherContainer);
  }
};

// show data
const showWeatherData = async (city) => {
  try {
    const data = await getWeatherData(city);

    if (data.cod === 200) {
      cityElement.innerText = data.name;

      countryElement.setAttribute(
        "src",
        `${apiCountryURL}${data.sys.country}/flat/64.png`
      );

      tempElement.innerHTML = parseInt(data.main.temp) + "&deg;C";
      descElement.innerText = data.weather[0].description;
      weatherElement.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      );
      humidtyElement.innerText = `${data.main.humidity}%`;
      windElement.innerText = `${data.wind.speed}km/h`;

      const paisAtual = data.sys.country;

      await pictureCountries(backgroundPaises, paisAtual);
      backgroundPaises.classList.remove("hide");
      weatherContainer.classList.remove("hide");
      erro.classList.add("hide");
    } else {
      nomeErro.textContent = "nome";
      ClassToggle(erro, backgroundPaises, weatherContainer);
    }
  } catch (error) {}
};

const removeError = setInterval(() => {
  if (
    cityInput.value === "" &&
    !erro.classList.contains("hide") &&
    formCepInput.value === ""
  ) {
    erro.classList.add("hide");
    seuLocal.classList.add("hide");
  }
}, 1000);

// remove class/ conteudo
function ClassToggle(erro, backgroundPaises, weatherContainer) {
  erro.classList.remove("hide");
  backgroundPaises.classList.add("hide");
  weatherContainer.classList.add("hide");
}

// pega fotos dos paises e coloca no background
async function pictureCountries(backgroundPaises, paisAtual) {
  async function paises() {
    const paises = paisAtual;
    const apiCountry = `https://servicodados.ibge.gov.br/api/v1/paises/${paises}`;
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

  const foto = data.hits[numeroSorteado].webformatURL;

  backgroundPaises.setAttribute("src", foto);
}

//desabilita o botao de search
setInterval(() => {
  if (cityInput.value.length > 1) {
    searchBtn.disabled = false;
  } else {
    searchBtn.disabled = true;
  }
}, 1000);

//Eventos de inicio do sistema

//evento de change
formCep.addEventListener("change", async (e) => {
  try {
    e.preventDefault();
    const cep = e.target.value;
    const cepValido = validarCep(cep);
    const data = await viaCepApi(cepValido);

    // cityInput.value = data.localidade ? data.localidade : '';
    cityInput.value = "";
    showWeatherData(data.localidade);

    setTimeout(() => formCep.classList.add("hide"), 500);
  } catch (error) {
    nomeErro.textContent = "CEP";
    cityInput.value = "";

    erro.classList.remove("hide");
    weatherContainer.classList.add("hide");
    backgroundPaises.classList.add("hide");
    console.error(error);

    if (cep === "") {
      erro.classList.add("hide");
    }
  }

  function validarCep(cep) {
    const regex = /^\d{1,9}$/;
    if (regex.test(cep)) {
      return cep;
    } else {
      throw new Error("CEP inválido");
    }
  }
});

//evento de click no botao
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  formCepInput.value = "";
  const city = cityInput.value;
  if (cityInput.value != "") {
    showWeatherData(city);
  }
});

//evento de pressionar botao no input
cityInput.addEventListener("keyup", (e) => {
  e.preventDefault();

  if (cityInput.value.length > 1) {
    searchBtn.disabled = false;
  }

  if (searchBtn.disabled === false) {
    if (e.code === "Enter" || e.keyCode === 13) {
      const city = e.target.value;
      formCepInput.value = "";

      showWeatherData(city);
    }
  }
});
