function cambiarBoton(){
    const boton = document.getElementsByName('button-search')[0];
    const imagen = document.getElementsByName('imagen-search')[0];
    const cancelar = document.getElementsByName('cancelar-search')[0];
    boton.style.width = '84vh';
    boton.style.height = '';
    boton.style.padding = "3vh";
    boton.style.fontSize = "3vh";
    boton.style.color = "white";
    imagen.style.opacity = '0';
    cancelar.style.opacity = '1';
    //boton.setAttribute("onclick", "cambiarBotonActivado()");
    boton.setAttribute("type", "search");
    boton.setAttribute("placeholder", "Far Cry, Minecraft, Skyrim...");
}

function cambiarBotonActivado(){
    const boton = document.getElementsByName('button-search')[0];
    const imagen = document.getElementsByName('imagen-search')[0];
    const cancelar = document.getElementsByName('cancelar-search')[0];
    boton.style.width = '55px';
    boton.style.color = 'transparent'
    imagen.style.opacity = '1';
    cancelar.style.opacity = '0';
    //boton.setAttribute("onclick", "cambiarBoton()");
}



