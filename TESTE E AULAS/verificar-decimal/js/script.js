let h1 = document.querySelector('h1')

h1.innerHTML = 'f'


function isFloat(numero) {

    if(!isNaN(numero)) {
        if(parseInt(numero) != parseFloat(numero)) {
            return true;
        }
    }
    return false
}



h1.innerHTML = isFloat('1.4')