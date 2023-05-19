let h1 = document.querySelector('h1')

const url = 'https://www.google.com'

h1.innerHTML = url

const btn = document.getElementById('btn')


btn.addEventListener('click', function () {

    const win = window.open(url, '_blank')
    win.focus()
})




