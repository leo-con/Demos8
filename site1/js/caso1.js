var idleTime = 0;
var idleInterval;
$(document).ready(function () {
    // Increment the idle time counter every minute.
    idleInterval = setInterval(timerIncrement, 1000); // 1 segundo

    // Zero the idle timer on mouse movement.
    $(document).click(function (e) {
        idleTime = 0;
        /*mensajes.innerHTML = "";
        let elmBoton = document.getElementById("btnChat");
        elmBoton.className = "oculto"*/
    });
    $(document).keypress(function (e) {
        idleTime = 0;
        /*mensajes.innerHTML = "";
        let elmBoton = document.getElementById("btnChat");
        elmBoton.className = "oculto"*/
    });
    genesysWidget();
});

function timerIncrement() {
    idleTime = idleTime + 1;
    var date = new Date(null);
    date.setSeconds(idleTime); 
    //console.log(date.toISOString());
    let sTiempo = date.toISOString();
    //console.log(sTiempo);
    let sHora = sTiempo.substring(11, 13);
    let sMinu = sTiempo.substring(14, 16);
    let sSegu = sTiempo.substring(17, 19);
    //console.log(sSegu);
    //let sInactividad = sHora + ":" + sMinu + ":" + sSegu;
    //console.log(sInactividad);
    let hour___Label = document.getElementById("hour");
    let minutesLabel = document.getElementById("minutes");
    let secondsLabel = document.getElementById("seconds");
    hour___Label.innerHTML = sHora;
    minutesLabel.innerHTML = sMinu;
    secondsLabel.innerHTML = sSegu;

    let sMaxSegs = document.getElementById("maxsegs").value;
    console.log(sMaxSegs);
    let nSegundosTranscurridos = parseInt(sSegu,10) + (parseInt(sMinu,10) * 60) + (parseInt(sHora,10) * 3600);
    console.log(nSegundosTranscurridos);
    if (nSegundosTranscurridos > sMaxSegs ){
        let mensajes = document.getElementById("mensajes");
        mensajes.innerHTML = "Le invitamos a comunicarse con nosotros haciendo click en Iniciar Chat";
        let elmBoton = document.getElementById("btnChat");
        elmBoton.className = "botonChat";
        clearInterval(idleInterval);
        Genesys("command", "Journey.pageview", {});
        Genesys("command", "Journey.record", { eventName: "caso 1"});
    }
}


