
const input = document.querySelector("#imagem");

input.addEventListener("change", function(e){

    const tgt = e.target || window.event.srcElement;
    const files = tgt.files
    const fr = new FileReader();

    fr.onload = function(){ //carregamento
        document.querySelector("#preview-imagem").src = fr.result;
    }

    fr.readAsDataURL(files[0])

});


