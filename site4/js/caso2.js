function botonSubirFileClick(){
    let mensaje1 = document.getElementById("mensaje1");
    let mensaje2 = document.getElementById("mensaje2");
    let elmBoton = document.getElementById("btnChat");

    let input = document.getElementById('fileupload');

    mensaje1.innerHTML = "";
    mensaje2.innerHTML = "";

    if (!input.files[0]) {
        mensaje1.innerHTML = "Seleccione un archivo";
        return;
    }
    let file = input.files[0];
    if (file.size / 1024  > 1024){
        mensaje1.innerHTML = "El tamaño de archivo máximo permitido es de 1024 KB";
        mensaje2.innerHTML = "Intenta de nuevo o puedes chatear con nosotros " ;
        elmBoton.className = "botonChat";
        Genesys("command", "Journey.record", { eventName: "caso_2_Error"});
    }
    else if (file.size <= 0){
        mensaje1.innerHTML = "El archivo está vacio.";
        mensaje2.innerHTML = "Intenta de nuevo o puedes chatear con nosotros";
        elmBoton.className = "botonChat";
        Genesys("command", "Journey.record", { eventName: "caso_2_Error"});
    }
    else if ( file.name.split('.').pop().toLowerCase() !== "txt"){
        mensaje1.innerHTML = "El proceso solo acepta archivos tipo txt.";
        mensaje2.innerHTML = "Intenta de nuevo o puedes chatear con nosotros";
        elmBoton.className = "botonChat";
        Genesys("command", "Journey.record", { eventName: "caso_2_Error"});
    }
    else{
        mensaje1.innerHTML = "Archivo Ok.";
        Genesys("command", "Journey.record", { eventName: "caso_2_Ok"});
    }

}


function botonSubirFileClick1(){
    let mensaje1 = document.getElementById("mensaje1");
    mensaje1.innerHTML = "Archivo correcto";
    let mensaje2 = document.getElementById("mensaje2");
    mensaje2.innerHTML = "";
    let elmBoton = document.getElementById("btnChat");
    elmBoton.className = "botonChat";
    Genesys("command", "Journey.pageview", {});
    Genesys("command", "Journey.record", { eventName: "caso_2_Ok"});

}

function botonSubirFileClick2(){
    let mensaje1 = document.getElementById("mensaje1");
    mensaje1.innerHTML = "El tamaño maximo permitido es de 1024KB.";
    let mensaje2 = document.getElementById("mensaje2");
    mensaje2.innerHTML = "Le invitamos a comunicarse con nosotros haciendo click en Iniciar Chat";
    let elmBoton = document.getElementById("btnChat");
    elmBoton.className = "botonChat";
    Genesys("command", "Journey.pageview", {});
    Genesys("command", "Journey.record", { eventName: "caso_2_Error"});

}

$(document).ready(function () {
 localStorage.setItem('_af5f8e01-a262-4c16-aa04-cdb544818d95:gcmcopn', '{"value":"false","ttl":null}');
 genesysWidget();

 Genesys('subscribe', 'Journey.ready', () => {
    console.log('The journey plugin is ready!');
    Genesys("command", "Journey.pageview", {});
  });
  
})