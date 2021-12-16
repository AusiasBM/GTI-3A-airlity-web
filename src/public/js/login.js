
var URL = "http://localhost:3500";

function login(evento){
    evento.preventDefault();
    
    fetch(URL + "/login", {
        method: 'post',
        mode: "cors",
        headers: {"correo": document.getElementById('label_correo').value, "contrasenya": document.getElementById('label_contrasenya').value},
    }).then(function (resp){
        
        if(resp.status == 200){
            return resp.json()
        }else{
            document.getElementById('textoErrorLogin').innerHTML = `
                <h6>Algo no está bién</h6>
            `
        }
    }).then( function(res){
        //console.log(res.data.token)
        //console.log(res.datosUsuario)

        sessionStorage.setItem('token', res.data.token); // write
        sessionStorage.setItem('correo', res.datosUsuario.correo);
        sessionStorage.setItem('macSensor', res.data.macSensor);
        sessionStorage.setItem('nombreUsuario', res.data.nombreUsuario);
        sessionStorage.setItem('rol', res.data.rol);
        sessionStorage.setItem('telefono', res.data.telefono);
        sessionStorage.setItem('_id', res.data._id);

        location.href = './app.html';
    }).catch(
        (err) => console.log(err)
    );
}

function cerrarSesion(){


    sessionStorage.removeItem('token'); // write
    sessionStorage.removeItem('correo');
    sessionStorage.removeItem('macSensor');
    sessionStorage.removeItem('nombreUsuario');
    sessionStorage.removeItem('rol');
    sessionStorage.removeItem('telefono');
    sessionStorage.removeItem('_id');

    location.href = './index.html';
}

// function registrarUsuario(evento){
//     evento.preventDefault();

//     console.log(document.getElementById('label_usuario').value)

//     fetch(URL + "/registrarUsuario", {
//         method: 'post',
//         mode: "cors",
//         headers: {
//             "usuario": document.getElementById('label_usuario').value, 
//             "correo": document.getElementById('label_correo').value, 
//             "contrasenya": document.getElementById('label_contrasenya').value,
//             "telefono": document.getElementById('label_telefono').value
//         },
//     }).then(function (resp){
//         console.log(resp.json())
//         if(resp.status == 200){
//             location.href = './app.html';
//         }else{
//             document.getElementById('textoErrorLogin').innerHTML = `
//                 <h6>Algo no está bién</h6>
//             `
//         }
//     }).then(
//         (res) => console.log(res)
//     ).catch(
//         (err) => console.log(err)
//     );
// }