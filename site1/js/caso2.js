function botonSubirFileClick1(){
    let mensaje1 = document.getElementById("mensaje1");
    mensaje1.innerHTML = "Archivo correcto";
    let mensaje2 = document.getElementById("mensaje2");
    mensaje2.innerHTML = "";
    let elmBoton = document.getElementById("btnChat");
    elmBoton.className = "botonChat";
    Genesys("command", "Journey.pageview", {});
    Genesys("command", "Journey.record", { eventName: "caso 2 Ok"});

}

function botonSubirFileClick2(){
    let mensaje1 = document.getElementById("mensaje1");
    mensaje1.innerHTML = "El tamaño maximo permitido es de 1024KB.";
    let mensaje2 = document.getElementById("mensaje2");
    mensaje2.innerHTML = "Le invitamos a comunicarse con nosotros haciendo click en Iniciar Chat";
    let elmBoton = document.getElementById("btnChat");
    elmBoton.className = "botonChat";
    Genesys("command", "Journey.pageview", {});
    Genesys("command", "Journey.record", { eventName: "caso 2 Error"});

}

$(document).ready(function () {
 genesysWidget();
})