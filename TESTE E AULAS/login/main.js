let  passField = document.getElementById("password");

let showHide = () =>{
    if(passField.type === "password"){
        passField.type = "text";
    }
    else{
        passField.type = "password"
        
    }
}

