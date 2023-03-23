//
var intervalID;
function genesysWidget() {
  (function (g, e, n, es, ys) {
    g["_genesysJs"] = e;
    g[e] =
      g[e] ||
      function () {
        (g[e].q = g[e].q || []).push(arguments);
      };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement("script");
    ys.async = 1;
    ys.src = n;
    ys.charset = "utf-8";
    document.head.appendChild(ys);
  })(window, "Genesys", "https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js", {
    environment: "use1",
    deploymentId: "af5f8e01-a262-4c16-aa04-cdb544818d95",
  });
}

function ToggleWidget() {
  var boton = document.getElementById("btnChat");
  if (boton.innerHTML == "Iniciar Chat") {
    Genesys("command", "Messenger.open", {}, function (o) {});
    boton.innerHTML = "Ocultar Chat";
  } else {
    Genesys("command", "Messenger.close", {}, function (o) {});
    boton.innerHTML = "Iniciar Chat";
  }
}
