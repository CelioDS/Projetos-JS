let h1 = document.querySelector('h1')

h1.innerHTML= 'teste'


// onmousedown
document.addEventListener("mousedown", function(e){
    console.log(e.button)

    if(e.button ===1){
        console.log('false')
        return false;
    }
})

