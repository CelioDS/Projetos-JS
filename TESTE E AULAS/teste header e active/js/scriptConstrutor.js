const links = document.querySelectorAll(".link")
const nav = document.getElementById("nav")
const menu = document.getElementById("menu")


function MenuLinks(links, menu, nav) {
    this.links = links
    this.menu = menu
    this.nav = nav



    this.verificarTela = function () {

        setInterval(verificarScreen, 100)
        function verificarScreen() {
            var largura = document.body.clientWidth;
            if (largura >= 550) {
                nav.classList.remove("navHide")
                menu.classList.remove("open")
            }
        }
    }


    this.menuOpen = function () {
        menu.addEventListener('click', () => {
            nav.classList.toggle("navHide")
            menu.classList.toggle("open")
        })
    }



    this.linksActive = function () {
        links.forEach((link, index) => {
            link.addEventListener("click", (e) => {

                link.classList.toggle('active')
                links.forEach((link, index0) => {
                    if (index0 !== index) {
                        nav.classList.remove("navHide")
                        menu.classList.remove("open")
                    }
                })
            })
        })

    }
}

const menus = new MenuLinks(links, menu, nav)

menus.linksActive()
menus.menuOpen()
menus.verificarTela()

