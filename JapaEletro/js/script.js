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

/*********************** Ativar link **********************/

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
            const pagina1 = el.parentElement.parentElement;
            const pagina2 = el.parentElement


            if (listaBotao.includes(pagina.classList.value)) {
                let paginaAtual = pagina.classList.value
                document.querySelectorAll("section").forEach(function (section) {
                    if (section.id === paginaAtual) {
                        
                    } else {
                       
                       

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

/************** Funcionamento *********************** */


function verificarHorario() {
    let Funcionamento = document.getElementById("funcionamento")
    Funcionamento.innerText = 'Aberto'

    const timeElapsed = Date.now();
    const hoje = new Date(timeElapsed) ;
    const dia = hoje.toDateString().slice(0, 3)
    const data = new Date()
    const hora = String(data.getHours()) 

    if(hora >= 9 && hora < 18 && dia !== 'Sun'){
        Funcionamento.innerText = 'Aberto agora'
        Funcionamento.style.color = "Green"
   
    }
    else{
        Funcionamento.innerText = 'Fechado agora'
        Funcionamento.style.color = "red"
        Funcionamento.style.textShadow = '3px 3px 3px black'
    }
}

setInterval(verificarHorario , 100)
