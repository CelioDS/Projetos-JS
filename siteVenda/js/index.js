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
/********************* fecha menu************************************ */



const botao = document.getElementById("mobile-menu")


function fecharmenu() {
  botao.click()
}

/****************************sliede*******************************/
$('.slide-principal').slick({
  dots: true,
  isFinite: true,
  speed: 1900,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 1900
  // fade:true, // imagem some sem se mover

});
/*************************email**********************************/
function validar(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);

}

function avisoEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;



  if (name && email && subject && message !== '') {
    if (validar(email) !== false) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Email enviado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
}

/********************* btnsubir**************  */

const loop = setInterval(() => {
  const btnsubir = document.getElementById("btn-subir");
  //altura atual do site
  var altura = document.body.getBoundingClientRect().y;
  //largura
  var largura = document.body.clientWidth;

  if (largura <= 600 && altura <= -800) {
    btnsubir.style.visibility = "visible"
  } else {
    btnsubir.style.visibility = "hidden"
  }
}, 1000);