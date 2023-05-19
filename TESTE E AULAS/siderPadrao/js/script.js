const menu = document.querySelector('.sidebar')

function abrirmenu() {
    menu.classList.toggle('menu-mobile-active')    
    
 
}


function verificarTela() {
    var largura = document.body.clientWidth;
    if (largura <= 480 && !menu.classList.contains("menu-mobile-active") ) {
        menu.classList.add("menu-mobile")
    }
    else if(largura > 480){
        menu.classList.remove("menu-mobile")  
        menu.classList.remove("menu-mobile-active")  
    }else{
        menu.classList.remove("menu-mobile")  
    }
  
}

setInterval(verificarTela, 10)

