

console.log(sessionStorage.getItem('token'));

if(sessionStorage.getItem('token') != undefined){
    
    var opcionDashboard = document.querySelector('#btn-dashboard');
    opcionDashboard.classList.replace('invisible', 'visible');

    var opcionIniciarSesion = document.querySelector('#btn-iniciarSesion');
    opcionIniciarSesion.classList.replace('visible', 'invisible');

    
}else{

    var opcionIniciarSesion = document.querySelector('#btn-iniciarSesion');
    opcionIniciarSesion.classList.replace('invisible', 'visible');

    var opcionDashboard = document.querySelector('#btn-dashboard');
    opcionDashboard.classList.replace('visible', 'invisible');

}

//console.log(sessionStorage.getItem('token'));

function goDashboard(){
    location.href = './app.html';
}