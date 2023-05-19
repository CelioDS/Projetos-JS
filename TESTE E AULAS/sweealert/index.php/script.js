function alerta(type, title, mensagem){
    Swal.fire({
    icon: type,
    title: title,
    text:  mensagem,
    showConfirmButton: false,
    timer: 1500
})

}