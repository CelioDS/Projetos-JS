var display = document.getElementById('display')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')
var começar = document.getElementById('começar')



for (var i = 00; i <= 60; i++) {
    minutos.innerHTML += '<option value="' + i + '"> ' + i + '</option>'
    if (i >= 1) {
        segundos.innerHTML += '<option value="' + i + '"> ' + i + '</option>'
    }
}

começar.addEventListener("click", function () {


    display.childNodes[1].innerHTML = minutos.value + ':' + segundos.value

    const loop = setInterval(function () {
        segundos.value--

        if (segundos.value <= 0) {
            if (minutos.value > 0) {
                minutos.value--
                segundos.value = 59
            } else {
                display.childNodes[1].innerHTML = minutos.value + ':' + segundos.value + ' fim'
                clearInterval(loop)
            }
        }
        display.childNodes[1].innerHTML = minutos.value + ':' + segundos.value

    }, 1000);
})