
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
        sessionStorage.setItem('token', res.data.token); // write
        //console.log(res.data.token)
        location.href = './app.html';
    }).catch(
        (err) => console.log(err)
    );
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