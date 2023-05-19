const links = document.querySelectorAll(".link")
const nav = document.getElementById("nav")
const menu = document.getElementById("menu")




links.forEach((link, index) => { 
    link.addEventListener("click", (e) => {     //verifica os link e qual foi clicado 

        link.classList.toggle('active')         // adicona um class ao mesmo
        links.forEach((link, index0) => {
            if (index0 !== index) {             // os outros link com a class é removido
                link.classList.remove('active')
            }
        })
    })
})



menu.addEventListener('click', () => {   //qual o menu e clicado
    nav.classList.toggle("navHide")     // abre os menu e os link
    menu.classList.toggle("open")      // toggle adiciona se nao tive e remove se tiver
})

function verificarTela() {                       // remove o menu  
    var largura = document.body.clientWidth;
    if (largura >= 550) {
        nav.classList.remove("navHide")
        menu.classList.remove("open")

    } 
}


setInterval(verificarTela, 10)         //loop para verifica sempre 



