const { param } = require("express/lib/request");
const { get } = require("express/lib/response");

const IP_PUERTO="http://localhost:3500"

function verificar(){

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries()).token;
    console.log(params);

    fetch(IP_PUERTO + '/verificar/' + params, {
        method : 'post',
    })
    // Esperamos la respuesta
    .then(function (respuesta) {
        if(respuesta.status == 200){
            location.href = './index.html';
        }
        
    })
}


verificar();