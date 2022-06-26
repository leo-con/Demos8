var idleTime = 0;
var idleInterval;
$(document).ready(function () {
  ac("dom", "ready", () => {
    console.log("The journey SDK is ready!");
    //ac(      "record",      "login",      [{ email: "pedroperez99@hotmail.com", givenName: "Pedro", familyName: "Perez" }],      [{ fieldName: "email" }, { fieldName: "givenName" }, { fieldName: "familyName" }]    );
  });
});

function Evento1() {
  ac("record", "ErrorCargarArchivo");
}
