class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      var larguraDaTela = window.innerWidth;

      if (larguraDaTela <= 999) {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.1
            }s`);
      } else {
        link.style.animation = "";
      }
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

/*** abrir o campo de informações   ABOUT******************/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var btnJob = document.getElementsByClassName("btn-job");

function opentab(tabname) {
  for (link of tablinks) {
    link.classList.remove("active-link");
  }

  for (contents of tabcontents) {
    contents.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

/********************* fecha menu************************************ */

const botao = document.getElementById("mobile-menu");

function fecharmenu() {
  botao.click();
}

/********************* btnsubir**************  */
const btnsubir = document.getElementById("btn-subir");
const fogueteUp = document.querySelector(".bi-rocket");
const fogueteSpan = document.querySelector(".bi-rocket-fill2");

const loop = setInterval(() => {
  const btnsubir = document.getElementById("btn-subir");

  btnsubir.addEventListener("click", (e) => {
    fogueteUp.classList.replace("bi-rocket", "bi-rocket-fill");

    fogueteUp.classList.add("foguete");
    fogueteSpan.classList.add("fogo");
  });
  //altura atual do site
  var altura = document.body.getBoundingClientRect().y;
  //largura
  var largura = document.body.clientWidth;

  if (largura <= 600 && altura <= -1500) {
    btnsubir.style.visibility = "visible";
  } else {
    btnsubir.style.visibility = "hidden";
    fogueteUp.classList.remove("foguete");
    fogueteSpan.classList.remove("fogo");
    fogueteUp.classList.replace("bi-rocket-fill", "bi-rocket");
  }

  if (altura <= -800 && botao.classList.contains("active")) {
    fecharmenu();
  }
}, 1000);

//valida email
function validar(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// avisa o envio do email
function avisoEmail(e) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

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
  window.location.href = "https://celiotech.netlify.app/#contact";
}

/****************  fixa menu******************/
const nav = document.querySelector("nav");

function verificaNav() {
  const navRect = nav.getBoundingClientRect();
  const navbottom = navRect.bottom;
  const navtop = navRect.top;
  const scrollTopPosition = document.documentElement.scrollTop;
  const windowHeight = document.documentElement.clientWidth;

  // arrumar para celular
  if (
    navbottom >= 60 &&
    navtop === 0 &&
    nav.classList.contains("fixed") &&
    scrollTopPosition === 0
  ) {
    nav.classList.remove("fixed");
  }
  if (navbottom < 60 && navtop <= 0 && !nav.classList.contains("fixed")) {
    nav.classList.add("fixed");
  }
  if (windowHeight < 1000) {
    nav.classList.remove("fixed");
  }
}
verificaNav();
window.addEventListener("scroll", verificaNav);
window.addEventListener("resize", verificaNav);

/*******************Digitlização  */

const titulo = document.getElementById("Digitalização");

function typeWrite(texto) {
  const textoArray = texto.innerHTML.split("");
  titulo.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      if (letra === "e") {
        titulo.innerHTML += "&amp;";
      } else {
        titulo.innerHTML += letra;
      }
    }, 100 * i);
  });
}

typeWrite(titulo);

/*** Slide lingugagem */

const arrayLinguagem = [
  "bootstrap",
  "css3",
  "html5",
  "javascript",
  "nodejs",
  "php",
  "react",
  "sql",
];

const carrosselElement = document.querySelector("#carousel");

// Itera sobre cada elemento da lista arrayLinguagem
arrayLinguagem.forEach((linguagem) => {
  // Cria um novo elemento HTML
  const artigoElement = document.createElement("article");
  const figcaptionElement = document.createElement("figcaption");
  const imgElement = document.createElement("img");
  const legendElement = document.createElement("legend");

  artigoElement.classList.add("linguagens");
  imgElement.alt = linguagem;
  imgElement.src = `img/icons8-${linguagem}.svg`;
  legendElement.textContent = linguagem;

  // Adiciona o elemento filho ao elemento pai
  figcaptionElement.appendChild(imgElement);
  figcaptionElement.appendChild(legendElement);
  artigoElement.appendChild(figcaptionElement);

  // Adiciona o elemento HTML 'article' como filho do elemento HTML 'carrosselElement'
  carrosselElement.insertAdjacentElement("beforeend", artigoElement);
});

$(".slick-carousel").slick({
  infinite: true, // permitir rolagem infinita
  speed: 300, // velocidade da animação em milissegundos
  slidesToShow: 6, // quantos slides mostrar ao mesmo tempo
  slidesToScroll: 6, // quantos slides rolar por vez
  autoplay: true, // rolar automaticamente
  centerMode: true, // centralizar os slides
  autoplaySpeed: 1000, // tempo entre cada rolagem automática em milissegundos
  responsive: [
    {
      breakpoint: 768, // para telas menores que 768px
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480, // para telas menores que 480px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".slick-next, .slick-prev").remove();

/*********  ativador link  ****************/
class menuAtivo {
  constructor(listaBotao) {
    this.listaBotao = listaBotao = [];

    this.principal = function () {
      document.querySelectorAll(".menu").forEach(function (menu) {
        AdicionarArray(menu, listaBotao);
        ativarmenu(menu);
      });
    };

    function ativarmenu(menu) {
      menu.addEventListener("click", function (event) {
        const elemento = event.target || event.srcElement;

        const elementoHref = elemento.getAttribute("href").replace("#", "");

        listaBotao.forEach((menu) => {
          if (menu === elementoHref) {
            elemento.classList.add("active");
            elemento.parentNode.classList.add("activePai");
          }
        });

        document.querySelectorAll(".menu").forEach(function (menu) {
          let menuH = menu.href;
          let hashIndex = menuH.indexOf("#"); // obtém a posição do caractere #
          let menuHref = menuH.substring(hashIndex + 1); // extrai a parte da URL depois do caractere #

          if (ExtrairHref(menu) != elementoHref) {
            elemento.classList.contains("active")
              ? (menu.classList.remove("active"),
                menu.parentNode.classList.remove("activePai"))
              : null;
          }
        });
      });
    }

    function AdicionarArray(menu, listaBotao) {
      listaBotao.push(ExtrairHref(menu));
    }
  }
}

const MenuAtivo = new menuAtivo();
MenuAtivo.principal();

/*********  ativador link  automatico ****************/

function tela() {
  listaMenu = [];
  document.querySelectorAll("section").forEach(function (menu) {
    const rect = menu.getBoundingClientRect();

    if (
      rect.top <= 400 ||
      (rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth))
    ) {
      menu.hasAttribute("id") ? listaMenu.push(menu.id) : null;

      paginaAtual = listaMenu[listaMenu.length - 1];

      document.querySelectorAll(".menu").forEach(function (menu) {
        if (paginaAtual === ExtrairHref(menu)) {
          menu.classList.add("active");
          menu.parentNode.classList.add("activePai");
        } else {
          menu.classList.remove("active");
          menu.parentNode.classList.remove("activePai");
        }
      });
    }
  });
}

setInterval(tela, 1000);

function ExtrairHref(menu) {
  let menuH = menu.href;
  let hashIndex = menuH.indexOf("#"); // obtém a posição do caractere #
  let menuHref = menuH.substring(hashIndex + 1); // extrai a parte da URL depois do caractere #

  return menuHref;
}

/***CARROSRL */
