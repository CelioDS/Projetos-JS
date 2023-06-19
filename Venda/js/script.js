const menu = document.getElementById("menu");
const menuMobile = document.getElementById("menu-mobile");
const iconOpened = document.querySelector(".icon-opened");
const iconClosed = document.querySelector(".icon-closed");

menu.addEventListener("click", () => {
  menuMobile.classList.toggle("hidden");
  iconClosed.classList.toggle("hidden");
  iconOpened.classList.toggle("hidden");

  menuMobile.childNodes.forEach((link) => {
    link.addEventListener("click", () => {
      menuMobile.classList.add("hidden");
      iconClosed.classList.remove("hidden");
      iconOpened.classList.add("hidden");
    });
  });
});

const setYear = document.getElementById("ano"); //get year
var date = new Date();
var yearCurrent = date.getFullYear();

setYear.textContent = yearCurrent;

//valida email
function validar(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function avisoEmail() {
  var name = document.getElementById("name").value;
  var retorno = document.getElementById("retorno");
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
  const url = window.location.href;

  retorno.value = `${url}`;
}

const loop = setInterval(() => {
  const btnsubir = document.getElementById("subir");

  //altura atual do site
  var altura = document.body.getBoundingClientRect().y;
  //largura
  var largura = document.body.clientWidth;

  if (largura <= 1100 && altura <= -1500) {
    btnsubir.style.visibility = "visible";
  } else {
    btnsubir.style.visibility = "hidden";
  }

  if (altura < -500) {
    menuMobile.classList.add("hidden");
    iconClosed.classList.remove("hidden");
    iconOpened.classList.add("hidden");
  }
}, 1000);
