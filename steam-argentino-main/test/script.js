function cambiarBoton(){
    var boton = document.getElementsByName("button-search")[0];
    var imagen = document.getElementsByName("imagen-search")[0];
    boton.style.width = "640px";
    boton.style.fontSize = "25px";
    boton.style.padding = "2vh";
    boton.style.color = "white";
    imagen.style.opacity = 0;
    //boton.style.background = "red"
    boton.setAttribute("type", "search");
    boton.setAttribute("placeholder", "Minecraft, Call of Duty...");
    boton.setAttribute("onclick", "cambiarBotonActivado()");
}

function cambiarBotonActivado(){
    var boton = document.getElementsByName("button-search")[0];
    var imagen = document.getElementsByName("imagen-search")[0];
    boton.style.width = "50px";
    imagen.style.opacity = 1;
    //boton.style.background = "red"
    boton.setAttribute("type", "button");
    boton.setAttribute("onclick", "cambiarBoton()");
}