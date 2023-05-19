
    

document.onkeypress = bloquear;
document.onkeydown = bloquear;
document.oncontextmenu = mensagem;


function mensagem(){
    alert('bloqueador');
    return false;
}



function bloquear(Event) {
    var Event = Event ? Event : window.event;
    var tecla = (Event.keyCode) ? Event.keyCode : Event.which;

    if (tecla == 17) {
        mensagem();
        return false
    }
    if (tecla == 123) {
        mensagem();
        return false
    }
}