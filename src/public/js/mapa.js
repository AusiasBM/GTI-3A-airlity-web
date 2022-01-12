/**
 * 
 * @Autor Ausias Bañuls Mahiques
 * 
 * @description Este fichero contiene toda la lógica de del mapa, para que muestre todo el contenido.
 */
 const IP_PUERTO="http://localhost:3500"

 var map;
function initMap() {
     
     // Creamos el mapa
     map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 38.9965055, lng: -0.1674364}, // Coordenadas de inicio
         zoom: 12,
         mapTypeId: 'hybrid', // Tipo de mapa que se va ha dibujar (mapa con imagenes de satelite, carreteras y calles
         styles: [ // personalizar estilos del mapa
             {
                 featureType: 'poi', // Ocultar puntos de interes: negocios,etc.
                 stylers: [{visibility: 'off'}]
             },
             {
                 featureType: 'transit', // Ocultar estaciones de tren, paradas de autobus, etc.
                 stylers: [{visibility: 'off'}]
             }
         ],
         mapTypeControl: false, // Ocultar control de tipo de mapa
         streetViewControl: false, // ocultar botón que permite pasar a stricview
         rotateControl: false // ocultar
   });
 
  //  heatmap = new google.maps.visualization.HeatmapLayer({
  //       data: listHeadPoints,
  //       map: map,
  //     });
 
   map.setTilt(0); // Forzar que siempre esté en la vista desde arriba.

   const contentString =
   '<div id="content">' +
     "<p>Estación: <b>Gandia</b></p>" +
     "<p>Código: 46131002 </p>" +
     "<p>Dirección: Parc Alquería Nova </p>" +
   "</div>";

   const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const marker = new google.maps.Marker({
    position: {lat: 38.96797739, lng: -0.19109882},
    map,
    title: 'Estación de Gandia',
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
 

  medicionesOficiales();
 }


peticionGet = false;
var filtroTipo = 'Ninguno';
let markers = [];
let fechaIni;
let fechaFin;
let listHeadPoints = [];

$(function() {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left',
        locale: {
        format: 'DD-MM-YYYY'
        }
    }, function(start, end, label) {
      fechaIni = Date.parse(start.format('DD-MM-YYYY')); // Pasar de fecha a milisegundos
      fechaFin = Date.parse(end.format('DD-MM-YYYY'));
      //fechaIni = new Date(start.format('DD-MM-YYYY')); // Pasar de fecha a milisegundos
      //fechaFin = new Date(end.format('DD-MM-YYYY'));
      console.log(fechaIni)
      console.log(fechaFin)
      console.log( start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY'));
      todasLasMediciones();
    });
});


function tipoMedicion(tipo){

  filtroTipo = tipo;
  document.getElementById('dropdownMenu2').innerHTML = `Tipo contaminante: ${tipo}`;
  console.log(tipo)
  if(filtroTipo == 'Ninguno') deleteMarkers()
  else todasLasMediciones();
}

function deleteMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

function todasLasMediciones(){

  if(markers.length != 0) deleteMarkers();

    // Hacemos la petición get
    fetch(IP_PUERTO + '/todasLasMediciones', {
        method : 'get', 
        headers: {
            'Authorization': sessionStorage.getItem('token')
        }
    })
    // Esperamos la respuesta
    .then(function (respuesta) {
        if(respuesta.status != 200){
            document.getElementById('errorFiltros').innerHTML = `
                    Algo no ha salido bien`
        }
        return respuesta.json();
    })
    // Trabajamos con la respuesta para mostrarla.
    .then((res) => {
        console.log(res); // Depuración
        
        /**
         * fecha: 1639419932071
          humedad: 100
          idUsuario: "61b21c98c27677c66c2582a7"
          latitud: 38.99586
          longitud: -0.166152
          macSensor: "00:00:00:00:00:00"
          medida: 123
          temperatura: 10
          tipoMedicion: "O3"
        */

        listaRespJson = res;

        // Añadimos las mediciones al html
        listaRespJson.forEach(element => {

          var d = new Date(element.fecha);
          
          if(+fechaIni <= +element.fecha){
            if(filtroTipo == 'SO2' && element.tipoMedicion == 'SO2') crearMarker(element);
            else if(filtroTipo == 'O3' && element.tipoMedicion == 'O3') crearMarker(element);
            else if(filtroTipo == 'NO2' && element.tipoMedicion == 'NO2') crearMarker(element);
            else if(filtroTipo == 'CO' && element.tipoMedicion == 'CO') crearMarker(element);
            else if(filtroTipo == 'IAQ') crearMarker(element);
          }
          //listHeadPoints.push(new google.maps.LatLng(element.latitud, element.longitud));
          
        });

    })

    initMap();
}

                
function crearMarker(element){

  var d = new Date(element.fecha);

    const contentString =
    '<div id="content">' +
      "<p>Tipo de Medición: <b>" + element.tipoMedicion + "</b></p>" +
      "<p>Medida: " + element.medida + "</p>" +
      "<p>fecha: " + d.toLocaleString() + "</p>" +
    "</div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    var iconBase = {

      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Google_Map_Marker.svg/1024px-Google_Map_Marker.svg.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(32, 32),
      scaledSize: new google.maps.Size(24, 24),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 10)

    };

    const marker = new google.maps.Marker({
      position: {lat: element.latitud, lng: element.longitud},
      map,
      title: element.tipoMedicion,
      icon: iconBase
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });

    markers.push(marker);

}



function medicionesOficiales(){


    // Hacemos la petición get
    fetch(IP_PUERTO + '/medidasOficiales', {
        method : 'get',
    })
    // Esperamos la respuesta
    .then(function (respuesta) {
        if(respuesta.status != 200){
            document.getElementById('errorFiltros').innerHTML = `
                    Algo no ha salido bien`
        }
        return respuesta.json();
    })
    // Trabajamos con la respuesta para mostrarla.
    .then((res) => {
        console.log(res); // Depuración
        

        

    })

    initMap();
}