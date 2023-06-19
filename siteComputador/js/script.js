const menu = document.querySelector(".sidebar");

function abrirmenu() {
  menu.classList.toggle("menu-mobile-active");
}

function verificarTela() {
  var largura = document.body.clientWidth;
  if (largura <= 480 && !menu.classList.contains("menu-mobile-active")) {
    menu.classList.add("menu-mobile");
  } else if (largura > 480) {
    menu.classList.remove("menu-mobile");
    menu.classList.remove("menu-mobile-active");
  } else {
    menu.classList.remove("menu-mobile");
  }
}
setInterval(verificarTela, 10);

/***********************Digitalização  ********************/
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

typeWrite(titulo);

/*********************** scrol reveal  ********************/

AOS.init();

/*********************** get ano  ********************/
function GetYear() {
  let ano = document.getElementById("ano");
  const data = new Date();
  const getYear = String(data.getFullYear());

  ano.innerHTML = getYear;
}

GetYear();

/********************* btnsubir**************  */

const loop = setInterval(() => {
  const btnsubir = document.getElementById("btn-subir");
  //altura atual do site
  var altura = document.body.getBoundingClientRect().y;
  //largura
  var largura = document.body.clientWidth;

  if (largura <= 600 && altura <= -8000) {
    btnsubir.style.visibility = "visible";
  } else {
    btnsubir.style.visibility = "hidden";
  }
}, 1000);

/*********  ativador link  ****************/
function menuAtivo(listaBotao) {
  this.listaBotao = listaBotao = [];

  this.principal = function () {
    document.querySelectorAll("button").forEach(function (button) {
      AdicionarArray(button, listaBotao);
      ativarmenu(button);
    });
  };

  function ativarmenu(button) {
    button.addEventListener("click", function (event) {
      const elemento = event.target || event.srcElement;
      const childerElemento = elemento.parentElement.children[0];

      const elementoHref = elemento.getAttribute("href")

      listaBotao.forEach((botao) => {
        if (botao === elementoHref) {
          childerElemento.classList.add("active");
        }
      });

      document.querySelectorAll("button").forEach(function (button, index) {
        if (index != 0 && index != 1) {
          if (
            button.classList.value !== "button-mobile1" &&
            button.classList.value !== "menu-mobile1" &&
            button.classList.value !== "btn-subir"
          ) {
            const buttonChilder = button.childNodes[1];

            const botaoDesativar =
              buttonChilder.parentElement.childNodes[1].childNodes[1];

            if (childerElemento != botaoDesativar.href) {
              botaoDesativar.classList.remove("active");
            }
          }
        }
      });
    });
  }

  function AdicionarArray(button, listaBotao) {
    if (
      button.classList.value !== "button-mobile1" &&
      button.classList.value !== "menu-mobile1" &&
      button.classList.value !== "btn-subir"
    ) {
      listaBotao.push(button.classList.value);
    }
  }
}

const MenuAtivo = new menuAtivo();
MenuAtivo.principal();

/*********  ativador link  automatico ****************/

function tela() {
  document.querySelectorAll("section").forEach(function (button) {
    const rect = button.getBoundingClientRect();

    if (
      rect.top <= 500 ||
      (rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth))
    ) {
      array = [];
      array.push(button.id);

      paginaAtual = array.join(" ");

      document.querySelectorAll("button").forEach(function (button, index) {
        if (index != 0 && index != 1) {
          if (
            button.classList.value !== "button-mobile1" &&
            button.classList.value !== "menu-mobile1" &&
            button.classList.value !== "btn-subir"
          ) {
            const buttonChild = button.childNodes[1];
            const iconChild =
              buttonChild.parentElement.childNodes[1].childNodes[1];
            const pagina = iconChild.getAttribute("href").replace("#", "");

            if (paginaAtual != "inicio2") {
              if (paginaAtual === pagina) {
                iconChild.classList.add("active");
              }
            } else {
              if (index === 2 && paginaAtual === "inicio2") {
                iconChild.classList.add("active");
              } else {
                iconChild.classList.remove("active");
              }
            }

            if (paginaAtual === pagina) {
              iconChild.classList.add("active");
            } else {
              if (paginaAtual != "inicio2") {
                iconChild.classList.remove("active");
              }
            }

            if (index === 7 && paginaAtual === "fonte") {
              if (rect.bottom >= 800) {
                iconChild.classList.add("active");
              } else {
                iconChild.classList.remove("active");
              }
            }

            if (index === 8 && paginaAtual && paginaAtual === "fonte") {
              if (rect.bottom >= 800) {
                iconChild.classList.remove("active");
              } else {
                iconChild.classList.add("active");
              }
            }
          }
        }
      });
    }
  });
}

setInterval(tela, 1000);
