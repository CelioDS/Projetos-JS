let h1 = document.querySelector('h1')
h1.innerHTML = 'teste'

const btn = document.querySelector('#refresh')

btn.addEventListener("click", function(){
    location.reload()
})

