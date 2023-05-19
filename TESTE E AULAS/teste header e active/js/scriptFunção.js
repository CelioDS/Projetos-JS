const links = document.querySelectorAll(".link")
const nav = document.getElementById("nav")
const menu = document.getElementById("menu")


function linkActive(links) {
    links.forEach((link, index) => {
        link.addEventListener("click", (e) => {
 
            link.classList.toggle('active')
            links.forEach((link, index0) => {
                if (index0 !== index) {
                    link.classList.remove('active')
                }
            })
        })
    })

}

function menuOpen(nav, menu) {
    menu.addEventListener('click', () => {
        nav.classList.toggle("navHide")
        menu.classList.toggle("open")
    })
}

function verificarTela() {
    var largura = document.body.clientWidth;
    if (largura >= 550) {
        nav.classList.remove("navHide")
        menu.classList.remove("open")
    }
}


setInterval(linkActive(links), 10)
menuOpen(nav, menu)
setInterval(verificarTela, 10)


