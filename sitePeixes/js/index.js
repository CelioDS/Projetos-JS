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
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1
          }s`);
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
  ".nav-list li",
);
mobileNavbar.init();

/***********************************************************/

function calc() {



  var n1 = parseFloat(document.getElementById('n1').value);
  var n2 = parseFloat(document.getElementById('n2').value);
  var n3 = parseFloat(document.getElementById('n3').value);
  var oper = document.getElementById('operator').value;

  var resultado = (n1 * n2 * n3) / 1000;
  var Termostato = (n1 * n2 * n3) / 1000;


  var n1 = verificaNegativo(n1)
  var n2 = verificaNegativo(n2)
  var n3 = verificaNegativo(n3)




  if (oper === 'x') {
    document.getElementById('resultado').value = (n1 * n2 * n3) / 1000 + ' Litros';
    document.getElementById('resultado').style.backgroundColor = '#00e1ff';

    document.getElementById('filtro').value = verificaNegativo(resultado) * 2 + ' L/h';
    document.getElementById('filtro').style.backgroundColor = '#00e1ff';

    document.getElementById('Termostato').value = verificaNegativo(Termostato) * 2 + ' watts';
    document.getElementById('Termostato').style.backgroundColor = '#00e1ff';

    document.getElementById('mm').value = verificar_MM(resultado);
    document.getElementById('mm').style.backgroundColor = '#00e1ff';

    document.getElementById('kg').value = '' + verificaNegativo(resultado) + ' kg';
    document.getElementById('kg').style.backgroundColor = '#00e1ff';


    window.navigator.vibrate(500)

  }

  if (document.getElementById('resultado').value === 'NaN Litros') {
    document.getElementById('filtro').value = 0;
    document.getElementById('filtro').style.backgroundColor = 'red';

    document.getElementById('resultado').value = 0;
    document.getElementById('resultado').style.backgroundColor = 'red';

    document.getElementById('Termostato').value = 0;
    document.getElementById('Termostato').style.backgroundColor = 'red';

    document.getElementById('mm').value = 0;
    document.getElementById('mm').style.backgroundColor = 'red';

    document.getElementById('kg').value = 0;
    document.getElementById('kg').style.backgroundColor = 'red';


  }




  function verificar_MM(litros) {
    if (resultado <= 30) {
      return 3 + 'mm';
    }
    if (resultado > 30 && resultado <= 100) {
      return 5 + 'mm';
    }
    if (resultado > 100 && resultado <= 200) {
      return 6 + 'mm';
    }
    if (resultado > 200 && resultado <= 400) {
      return 8 + 'mm';
    }
    if (resultado > 400 && resultado <= 600) {
      return 10 + 'mm';
    }
    if (resultado > 600 && resultado <= 800) {
      return 12 + 'mm';
    }
    if (resultado > 800 && resultado <= 1000) {
      return 15 + 'mm';
    }
    if (resultado > 1000) {
      return 20 + 'mm ou mais ';
    }


  }

  function verificaNegativo(valor) {
    if (valor < 0) {
      return valor * -1;
    }
    else {
      return valor;
    }


  }

}
/***********************************************************/
var dateNow = new Date();
var hora = dateNow.getHours();

if (hora >= 6 && hora <= 12) {
  document.getElementById('cumprimento').value = 'Bom Dia';
}
else if (hora >= 12 && hora <= 18) {
  document.getElementById('cumprimento').value = 'Boa Tarde';

}
else {
  document.getElementById('cumprimento').value = 'Boa Noite';
}



/********************* fecha menu************************************ */



const botao = document.getElementById("mobile-menu")


function fecharmenu(){
  botao.click()
}
/***********************************************************/



//valida email
function validar(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);

}


// avisa o envio do email
function avisoEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;



  if (name && email && subject &&  message !== '') {
    if (validar(email) !== false) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Email enviado com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
}

function avisoCod() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;



  if (name && email && subject &&  message !== '') {
    if (validar(email) !== false) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'sem permissao',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
}

const loop = setInterval(() => {
  const btnsubir = document.getElementById("botaosubir");
  //altura atual do site
  var altura = document.body.getBoundingClientRect().y;
  //largura
  var largura = document.body.clientWidth;


  if (largura <= 600 && altura <= -1500) {
    btnsubir.style.visibility = "visible"
  } else {
    btnsubir.style.visibility = "hidden"
  }



}, 1000);







