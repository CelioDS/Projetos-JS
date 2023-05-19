let h1 = document.querySelector('h1')

h1.innerHTML= ''

const btn = document.getElementById("get-parent-element")

btn.addEventListener('click', function() {
    //receber as caracteristicas do elemento pai
    const parent = this.parentNode

    console.log(parent)
    console.log(parent.innerHTML)
    console.log(parent.classList)
    console.log(parent.innerText)
    

})