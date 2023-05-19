const h1 = document.getElementById("texto")

function typeWrite(texto){
  
    const textoArray = texto.innerHTML.split("") 
     h1.innerHTML = ''
    textoArray.forEach((letra, i) => {
    
    setTimeout(() => {
            h1.innerHTML += letra
      },100 * i)
    });
}

 typeWrite(h1)
