
const IP_PUERTO="http://localhost:3500"

peticionGet = false;

function obtenerTodasLasMediciones(){

    // Hacemos la petición get
    fetch(IP_PUERTO + '/api/todas-las-mediciones', {
        method : 'get', 
    })
    // Esperamos la respuesta
    .then(function (respuesta) {
        if(respuesta.status != 200){
            document.getElementById('listaMedicionesEnHtml').innerHTML = `
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
            document.getElementById('listaMedicionesEnHtml').innerHTML = ``;
        else // En caso de que no, pone que apartidir de ahora si.
            peticionGet = true;
        
        // Añadimos las mediciones al html
        listaRespJson.forEach(element => {
            document.getElementById('listaMedicionesEnHtml').innerHTML += `

                <div class="card border-primary mb-3" style="max-width: 200rem;">
                    <div class="card-header">Medición ${num}</div>
                    <div class="card-body">
                        <!--<h4 class="card-title">Id: ${element._id}</h4>-->
                        <p> 
                            Medicion = ${element.medicion}
                            <br>
                            Tipo de medición = ${element.tipoMedicion}
                            <br>
                            Fecha = ${element.fecha}
                            <br>
                            Latitud = ${element.lat}
                            <br>
                            Longitud = ${element.lng}
                            <br>
                        </p>
                    </div>
                </div>
            
            `
            num++;
        });
    })
}
