const menu = document.querySelector('.sidebar')

function abrirmenu() {
    menu.classList.toggle('menu-mobile-active')


}


function verificarTela() {
    var largura = document.body.clientWidth;
    if (largura <= 480 && !menu.classList.contains("menu-mobile-active")) {
        menu.classList.add("menu-mobile")
    }
    else if (largura > 480) {
        menu.classList.remove("menu-mobile")
        menu.classList.remove("menu-mobile-active")
    } else {
        menu.classList.remove("menu-mobile")
    }

}

setInterval(verificarTela, 10)

/*************************/


function menuAtivo(listaBotao) {

    this.listaBotao = listaBotao = []

    this.principal = function () {
        document.querySelectorAll("button").forEach(function (button) {

            AdicionarArray(button, listaBotao)
            ativarmenu(button)

        })
    }

    function ativarmenu(button) {
        button.addEventListener("click", function (event) {
            const el = event.target || event.srcElement;
            const pagina = el.parentElement.parentElement.parentElement;

            if (listaBotao.includes(pagina.classList.value)) {
                let paginaAtual = pagina.classList.value
                document.querySelectorAll("section").forEach(function (section) {
                    if (section.id === paginaAtual) {
                        section.style.display = "flex"
                    } else {
                        section.style.display = "none"
                    }
                })
            }
        })

    }

    function AdicionarArray(button, listaBotao) {
        if (button.classList.value !== 'button-mobile1' && button.classList.value !== 'menu-mobile1') {
            listaBotao.push(button.classList.value)
        }
    }
}

const MenuAtivo = new menuAtivo()
MenuAtivo.principal()


