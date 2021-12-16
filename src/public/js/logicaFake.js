/**
 * @Autor Ausias Bañuls Mahiques
 */


const IP_PUERTO="http://localhost:3500"

peticionGet = false;

/**
 * @Autor Ausias Bañuls Mahiques
 * @param ninguno
 * @return <Mediciones>
 * @description Pedimos al backend todas la mediciones y las mostramos en la sección del html
 */
function obtenerUltimasMediciones(){

    // Hacemos la petición get
    fetch(IP_PUERTO + '/ultimasMediciones/20', {
        method : 'get', 
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    })
    // Esperamos la respuesta
    .then(function (respuesta) {
        if(respuesta.status != 200){
            document.getElementById('listaMediciones').innerHTML = `
                    <h6>Algo no ha salido bien</h6>`
        }
        return respuesta.json();
    })
    // Trabajamos con la respuesta para mostrarla.
    .then((res) => {
        console.log(res); // Depuración
        
        listaRespJson = res;
        num = 0;

        // Esto lo hacemos para cuando apretemos el botón compruebe si ya hay mediciones mostrandose.
        if(!peticionGet) // En caso de que hayan peticiones mostrandose, las limpia
            document.getElementById('listaMediciones').innerHTML = ``;
        else // En caso de que no, pone que apartidir de ahora si.
            peticionGet = true;
        

        // Añadimos las mediciones al html
        listaRespJson.forEach(element => {

            var d = new Date(element.fecha);

            if(sessionStorage.getItem('rol') == 'Admin'){
                document.getElementById('listaMediciones').innerHTML += `

                    <div class="card border-primary mb-3 mw-100">
                        <div class="card-header">Medición ${num}</div>
                        <div class="card-body">
                            <p> 
                                Medicion = ${element.medida}
                                <br>
                                Tipo de medición = ${element.tipoMedicion}
                                <br>
                                Fecha = ${d.toLocaleDateString()}
                                <br>
                                Latitud = ${element.latitud}
                                <br>
                                Longitud = ${element.longitud}
                                <br>
                                Mac Sensor = ${element.macSensor}
                                <br>
                                Humedad = ${element.humedad}
                                <br>
                                Temperatura = ${element.temperatura}
                                <br>
                            </p>
                        </div>
                    </div>
                
                `
                num++;
            }else{
                if(sessionStorage.getItem('macSensor') == element.macSensor){
                    document.getElementById('listaMediciones').innerHTML += `

                        <div class="card border-primary mb-3 mw-100">
                            <div class="card-header">Medición ${num}</div>
                            <div class="card-body">
                                <!--<h4 class="card-title">Id: ${element._id}</h4>-->
                                <p> 
                                    Medicion = ${element.medida}
                                    <br>
                                    Tipo de medición = ${element.tipoMedicion}
                                    <br>
                                    Fecha = ${d.toLocaleDateString()}
                                    <br>
                                    Latitud = ${element.latitud}
                                    <br>
                                    Longitud = ${element.longitud}
                                    <br>
                                    Mac Sensor = ${element.macSensor}
                                    <br>
                                    Humedad = ${element.humedad}
                                    <br>
                                    Temperatura = ${element.temperatura}
                                    <br>
                                </p>
                            </div>
                        </div>
                    
                    `
                    num++;
                }
                
                
            }
            
            
        });

        if(num == 0){
            document.getElementById('listaMediciones').innerHTML += `<h3>No tienes mediciones</h3>`
        }
    })
}

//informeSensores?ciudad=NombreCiudad&tipoMedicion=Gas

function informeSensores(){


    // Hacemos la petición get
    fetch(IP_PUERTO + '/informeSensores?ciudad=Gandia&tipoMedicion=NO2', {
        method : 'get', 
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    })
    // Esperamos la respuesta
    .then(function (respuesta) {
        if(respuesta.status != 200){
            document.getElementById('listaDatosErroneos').innerHTML = `
                    <h6>Algo no ha salido bien</h6>`
        }
        return respuesta.json();
    })
    // Trabajamos con la respuesta para mostrarla.
    .then((res) => {
        console.log(res); // Depuración
        
        listaRespJson = res;
        num = 0;

        // Esto lo hacemos para cuando apretemos el botón compruebe si ya hay mediciones mostrandose.
        if(!peticionGet) // En caso de que hayan peticiones mostrandose, las limpia
            document.getElementById('listaDatosErroneos').innerHTML = ``;
        else // En caso de que no, pone que apartidir de ahora si.
            peticionGet = true;
        

        // Añadimos las mediciones al html
        listaRespJson.forEach(element => {

                document.getElementById('listaDatosErroneos').innerHTML += `

                    <div class="card border-primary mb-3 mw-100">
                        <div class="card-header">Medición ${num}</div>
                        <div class="card-body">
                            <h6 class="card-title">Sensor: ${element.sensor}</h6>
                            <p> 
                                desviacion Respecto Media Global = ${element.desviacionRespectoMediaGlobal}
                                <br>
                                limite Desviacion Inferior = ${element.limiteDesviacionInferior}
                                <br>
                                limite Desviacion Superior = ${element.limiteDesviacionSuperior}
                                <br>
                                media Desviada = ${element.mediaDesviada}
                                <br>
                                media Global = ${element.mediaGlobal}
                                <br>
                                media Sensor = ${element.mediaSensor}
                                <br>
                                valores Irregulares No Validos = ${element.valoresIrregularesNoValidos}
                                <br>
                            </p>
                        </div>
                    </div>
                
                `
                num++;
         });

        if(num == 0){
            document.getElementById('listaDatosErroneos').innerHTML += `<h3>No hay</h3>`
        }
    })

}



function sensoresInactivos(){


    // Hacemos la petición get
    fetch(IP_PUERTO + '/sensoresInactivos', {
        method : 'get', 
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    })
    // Esperamos la respuesta
    .then(function (respuesta) {
        if(respuesta.status != 200){
            document.getElementById('listaInactivos').innerHTML = `
                    <h6>Algo no ha salido bien</h6>`
        }
        return respuesta.json();
    })
    // Trabajamos con la respuesta para mostrarla.
    .then((res) => {
        console.log(res); // Depuración
        
        listaRespJson = res;
        num = 0;

        // Esto lo hacemos para cuando apretemos el botón compruebe si ya hay mediciones mostrandose.
        if(!peticionGet) // En caso de que hayan peticiones mostrandose, las limpia
            document.getElementById('listaInactivos').innerHTML = ``;
        else // En caso de que no, pone que apartidir de ahora si.
            peticionGet = true;
        

        // Añadimos las mediciones al html
        listaRespJson.forEach(element => {

            var d = new Date(element.fechaRegistro);

            document.getElementById('listaInactivos').innerHTML += `

                <div class="card border-primary mb-3 mw-100">
                    <div class="card-header">Medición ${num}</div>
                    <div class="card-body">
                        <h6 class="card-title">correo Usuario: ${element.correoUsuario}</h6>
                        <p> 
                            fecha Registro = ${d.toLocaleDateString()}
                            <br>
                            macSensor = ${element.macSensor}
                            <br>
                            tipo Medicion = ${element.tipoMedicion}
                            
                        </p>
                    </div>
                </div>
            
            `
            num++;
            
        });

        if(num == 0){
            document.getElementById('listaInactivos').innerHTML += `<h3>No hay</h3>`
        }
    })

}


function datosGraficaUsuario(){


    // Hacemos la petición get
    fetch(IP_PUERTO + '/datosGraficaUsuario?fechaIni=1637020800&fechaFin=1637193599', {
        method : 'get', 
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    })
    // Esperamos la respuesta
    .then(function (respuesta) {
        if(respuesta.status != 200){
            document.getElementById('listaInactivos').innerHTML = `
                    <h6>Algo no ha salido bien</h6>`
        }
        return respuesta.json();
    })
    // Trabajamos con la respuesta para mostrarla.
    .then((res) => {
        console.log(res); // Depuración
        
        // listaRespJson = res;
        // num = 0;

        // // Esto lo hacemos para cuando apretemos el botón compruebe si ya hay mediciones mostrandose.
        // if(!peticionGet) // En caso de que hayan peticiones mostrandose, las limpia
        //     document.getElementById('listaInactivos').innerHTML = ``;
        // else // En caso de que no, pone que apartidir de ahora si.
        //     peticionGet = true;
        

        // // Añadimos las mediciones al html
        // listaRespJson.forEach(element => {

        //     var d = new Date(element.fechaRegistro);

        //     document.getElementById('listaInactivos').innerHTML += `

        //         <div class="card border-primary mb-3 mw-100">
        //             <div class="card-header">Medición ${num}</div>
        //             <div class="card-body">
        //                 <h6 class="card-title">correo Usuario: ${element.correoUsuario}</h6>
        //                 <p> 
        //                     fecha Registro = ${d.toLocaleDateString()}
        //                     <br>
        //                     macSensor = ${element.macSensor}
        //                     <br>
        //                     tipo Medicion = ${element.tipoMedicion}
                            
        //                 </p>
        //             </div>
        //         </div>
            
        //     `
        //     num++;
            
        // });

        // if(num == 0){
        //     document.getElementById('listaInactivos').innerHTML += `<h3>No hay</h3>`
        // }
    })

}



// <script>
// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// </script>