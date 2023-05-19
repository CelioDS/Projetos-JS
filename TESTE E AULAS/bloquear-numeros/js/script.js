let h1 = document.querySelector('h1')

h1.innerHTML = 'teste'

const inputName = document.getElementById("name")

inputName.addEventListener("keypress", function (e) {

    const keycode = (e.keyCode ? e.keyCode : e.wich)
    console.log(keycode)

    if (keycode > 41 && keycode < 58) {
        e.preventDefault();
    }

})