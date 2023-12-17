const menu = document.getElementById("menu");
const menuMobile = document.getElementById("menu-mobile");
const iconOpened = document.querySelector(".icon-opened");
const iconClosed = document.querySelector(".icon-closed");
const setYear = document.getElementById("ano");
var date = new Date();

const setLink = document.getElementById("set-link");
const setAbout = document.getElementById("set-about");
const setTag = document.getElementById("set-tag");
const setDo = document.getElementById("set-do");

const sobre = document.getElementById("sobre");
const paragrafoSobre = sobre.querySelector("p");
const trabalhos = document.getElementById("trabalhos");
const paragrafoTrabalhos = trabalhos.querySelector("p");

setAbout.appendChild(paragrafoSobre.cloneNode(true));
setDo.appendChild(paragrafoTrabalhos.cloneNode(true));

function setFooter() {
  const links = document.querySelectorAll("a");

  links.forEach((a, index) => {
    const link = document.createElement("a");

    const arrayLinks = [];
    if (links[index].hash) {
      arrayLinks.push(links[index].hash);
    }

    if (arrayLinks.includes(links[index].hash)) {
      link.href = `${links[index].hash}`;
      setTag.appendChild(link);
    } else {
      link.href = `${links[index]}`;
      link.rel = "noopener noreferrer";
      link.target = "_blank";
      setLink.appendChild(link);
    }

    link.textContent = links[index].textContent.split(":")[0].trim();
    link.ariaLabel = `Acesse o ${links[index].textContent}`;
    link.title = `Acesse o ${links[index].textContent}`;
  });
}
setFooter();

let isScrolling = false; //fechar o menu ser estiver movendo
window.addEventListener("scroll", () => {
  if (!isScrolling) {
    //false ele oculta
    menuMobile.classList.add("hidden");
    iconClosed.classList.remove("hidden");
    iconOpened.classList.add("hidden");

    isScrolling = true;

    setTimeout(() => {
      isScrolling = false;
    }, 2000);
  }
});

menu.addEventListener("click", () => {
  menuMobile.classList.toggle("hidden");
  iconClosed.classList.toggle("hidden");
  iconOpened.classList.toggle("hidden");
  menuMobile.classList.toggle("aberto");

  menuMobile.childNodes.forEach((link) => {
    link.addEventListener("click", () => {
      menuMobile.classList.add("hidden");
      iconClosed.classList.remove("hidden");
      iconOpened.classList.add("hidden");
    });
  });
});

function getYear() {
  var yearCurrent = date.getFullYear();
  setYear.textContent = yearCurrent;
}
getYear();

function CheckOpen() {
  const horario = document.getElementById("horario");
  let horarionow = date.getHours();
  const timeElapsed = Date.now();
  const hoje = new Date(timeElapsed);
  let dia = hoje.toDateString().slice(0, 3);

  if (horarionow >= 10 && horarionow < 20 && dia !== "Sat" && dia !== "Sun") {
    horario.innerHTML = " <i class='bi bi-calendar2-check'></i> Aberto Agora";
    horario.style.color = "#6e4e11";
    horario.style.border = "1px solid  #099e09c4";
    horario.style.backgroundColor = "#d8eeaf";
  } else {
    horario.innerHTML = " <i class='bi bi-calendar-x'></i> Fechado Agora";
    horario.style.color = "#6e4e11";
    horario.style.border = "1px solid #ad2828c4";
    horario.style.backgroundColor = "#fad2d2";
  }
}

function avisoEmail() {
  var name = document.getElementById("name").value;
  var retorno = document.getElementById("retorno");
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  //valida email
  function validar(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  if (name && email && subject && message !== "") {
    if (validar(email) !== false) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Email enviado com sucesso",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  const url = window.location.href;

  retorno.value = `${url}`;
}

window.addEventListener("scroll", () => {
  const btnsubir = document.getElementById("subir");

  //altura atual do site
  var altura = document.body.getBoundingClientRect().y;
  //largura

  if (altura <= -1500) {
    btnsubir.style.visibility = "visible";
  } else {
    btnsubir.style.visibility = "hidden";
  }

  /*   if (altura < -500) {
    menuMobile.classList.add("hidden");
    iconClosed.classList.remove("hidden");
    iconOpened.classList.add("hidden");
  } */
  //para deixar o menu fixed

  CheckOpen();
});

function ativarLink() {
  var links = document.querySelectorAll("#menu-mobile li a");

  var windowCenter = window.innerHeight / 2; // Obtém o centro da janela

  var linkCentro = null; // Armazena o link central
  var distanciaCentro = Infinity; // Distância do link ao centro

  links.forEach((link) => {
    var sectionLinkId = link.getAttribute("href");
    var section = document.querySelector(sectionLinkId);
    var rect = section.getBoundingClientRect();

    var sectionCenter = rect.top + rect.height / 2; // Obtém o centro da seção

    link.classList.remove("ativarlink"); // Remove a classe de todos os links

    if (
      rect.top <= windowCenter && // Verifica se a seção está acima do centro da janela
      Math.abs(sectionCenter - windowCenter) < distanciaCentro // Verifica se é o link mais próximo do centro
    ) {
      linkCentro = link; // Atualiza o link central
      distanciaCentro = Math.abs(sectionCenter - windowCenter); // Atualiza a distância do link ao centro
    }
  });

  if (linkCentro) {
    linkCentro.classList.add("ativarlink"); // Adiciona a classe ao link central
  }
}

window.addEventListener("scroll", ativarLink);



const array = [1,2,3]

let array2 = array
let array3 = array.slice(2)

console.log(array2)
console.log(array3)
