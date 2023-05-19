const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active'); /* adiconar caso nao existe remover caso existe*/
    const menu = document.getElementById('btn-mobile');
    menu.classList.toggle('active');/* adiconar caso nao existe remover caso existe*/
    const link = document.getElementById('link');
    link.classList.toggle('active');/* adiconar caso nao existe remover caso existe*/


}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

const link = document.getElementById('link');
link.classList.toggle('active');/* adiconar caso nao existe remover caso existe*/

