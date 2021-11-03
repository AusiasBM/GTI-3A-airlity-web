
const IP_PUERTO="http://localhost:3500"

peticionGet = 0;

function obtenerTodasLasMediciones(){

    fetch(IP_PUERTO + '/api/todas-las-mediciones', {
        method : 'get',
        
    }).then(function (respuesta) {
        if(respuesta.status != 200){
            document.getElementById('listaMedicionesEnHtml').innerHTML = `
        
                    <h6>Algo no ha salido bien</h6>`
        }
        return respuesta.json();
    }).then((res) => {
        console.log(res);
        
        listaRespJson = res;
        num = 0;

        if(peticionGet != 0){
            document.getElementById('listaMedicionesEnHtml').innerHTML = ``;
        }else{
            peticionGet++;
        }

        listaRespJson.forEach(element => {


            document.getElementById('listaMedicionesEnHtml').innerHTML += `

                <div class="card border-primary mb-3" style="max-width: 200rem;">
                    <div class="card-header">Medición ${num}</div>
                    <div class="card-body">
                        <h4 class="card-title">Id: ${element._id}</h4>
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
