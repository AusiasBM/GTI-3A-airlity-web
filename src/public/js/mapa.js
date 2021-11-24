/**
 * 
 * @Autor Ausias Bañuls Mahiques
 * 
 */
var map;
function initMap() {
    // Creamos el mapa
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.9965055, lng: -0.1674364}, // Coordenadas de inicio
        zoom: 15,
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


  map.setTilt(0); // Forzar que siempre esté en la vista desde arriba.

  infoWindow = new google.maps.InfoWindow();

  // Marcador de ejemplo, que se utilizará para los nodos y las medidas
  var marker = new google.maps.Marker({
        position: {lat: 38.9965055, lng: -0.1654364},
        map: map,
        title: 'UPV Gandia'
    });
}