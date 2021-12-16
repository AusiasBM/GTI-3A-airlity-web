

//console.log(sessionStorage.getItem('token'));

if(sessionStorage.getItem('token') != undefined){
    
    document.querySelector('#btn-dashboard').classList.replace('invisible', 'visible');

    document.querySelector('#btn-iniciarSesion').classList.replace('visible', 'invisible');
    
}else{

    document.querySelector('#btn-iniciarSesion').classList.replace('invisible', 'visible');

    document.querySelector('#btn-dashboard').classList.replace('visible', 'invisible');

}

//console.log(sessionStorage.getItem('token'));

function goDashboard(){
    location.href = './app.html';
}