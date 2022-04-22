//
var intervalID;
function genesysWidget(){
  (function (g, e, n, es, ys) {
    g['_genesysJs'] = e;
    g[e] = g[e] || function () {
      (g[e].q = g[e].q || []).push(arguments)
    };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
  })(window, 'Genesys', 'https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js', {
    //environment: 'euw1',
    //deploymentId: '67f54707-e9ec-4f7c-8952-f80ff95364ed'
    environment: 'use1',
    deploymentId: '5019bb15-6b67-45f9-b409-655a90984e90'
  });

  intervalID = setInterval(subscribirAEventosPredEng, 500);
}

function ToggleWidget(){

  var boton = document.getElementById("btnChat");
  if (boton.innerHTML == "Iniciar Chat") {
    Genesys("command", "Messenger.open", {},
    function(o){},
    );
    boton.innerHTML = "Ocultar Chat";
  }
  else{
      Genesys("command", "Messenger.close", {},
      function(o){},
      );
      boton.innerHTML = "Iniciar Chat";
  }
}


function subscribirAEventosPredEng(){
  if (typeof Genesys == "undefined"){
    return
  }
  Genesys('subscribe', 'Journey.ready', () => {
    console.log('The journey plugin is ready!');
    {Genesys("command","Journey.record",{eventName:"login",customAttributes:{email:"pedroperez99@hotmail.com",givenName:"Pedro",familyName:"Perez"},traitsMapper:[{"fieldName":"email"},{"fieldName":"givenName"},{"fieldName":"familyName"}]})};
    Genesys("command", "Journey.pageview", {});
  });    
  Genesys('subscribe', 'Journey.qualifiedWebMessagingOffer', (data) => {
    console.log('event data:', data)
  });      
  clearInterval(intervalID);
}