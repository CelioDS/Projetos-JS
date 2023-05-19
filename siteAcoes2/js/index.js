const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active'); /* adiconar caso nao existe remover caso existe*/
    const menu = document.getElementById('btn-mobile');
    menu.classList.toggle('active');/* adiconar caso nao existe remover caso existe*/
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

/**********/

//funcao que retorna o valor da caluladora
function handleClick() {
  var number1 = document.querySelector( '[data-js="number1"]').value;
  var number2 = document.querySelector( '[data-js="number2"]').value;
  document.getElementById('result').value = 'R$ ' + mult( number1, number2 ) ;
}

//funcao de multiplicacao
function mult( number1, number2 ) {
  return number1 * number2;
}





/*** */


    function mostraAlerta(){
        var  alerta = document.getElementById('alerta')
        alerta.classList.toggle('d-none');
        }
                 
