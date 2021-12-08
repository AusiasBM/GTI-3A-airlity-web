markers = [
    {
      "name": "Prat de Cabanes",
      "url": "https://www.google.com/maps/place/Parque+Natural+Prado+de+Cabanes-Torreblanca/@40.1373455,0.1651026,15z/data=!4m2!3m1!1s0x0:0x511ed0c94fc98c22?sa=X&ved=2ahUKEwjM1r7Nvsz0AhWBCZ0JHaPGBE4Q_BJ6BAhpEAU",
      "lat": 40.1369444,
      "lng": 0.16555555
    },
    {
      "name": "Gandia",
      "url": "https://www.google.com/maps?ie=UTF8&daddr=38.96797739,-0.19109882&z=13&geocode=&dirflg=&saddr=&f=d&hl=es",
      "lat": 38.96797739,
      "lng": -0.19109882
    },
    {
      "name": "Valencia",
      "url": "https://www.google.com/maps/place/Ciutat+administrativa+9+d%E2%80%99Octubre/@39.4715801,-0.4062283,17z/data=!3m1!4b1!4m5!3m4!1s0xd604f71d66318eb:0x2a8634de53dc5cb3!8m2!3d39.4715594!4d-0.4041479",
      "lat": 39.472222,
      "lng": 0.4225
    },
    {
        "name": "Denia",
        "url": "https://www.google.com/maps/place/EDAR+(Estacion+Aguas+Residuales)+Gata+de+Gorgos/@38.7699568,0.0995787,17z/data=!3m1!4b1!4m5!3m4!1s0x129e045a93b7d48b:0xc313240510b0361b!8m2!3d38.7699765!4d0.1015078",
        "lat": 38.821944,
        "lng": 0.0358333
    },
    {
        "name": "Torrevieja",
        "url": "https://www.google.com/maps/place/Parque+Natural+de+Las+Lagunas+de+La+Mata+y+Torrevieja/@38.2281358,-0.8306636,10z/data=!4m9!1m2!2m1!1sCentro+de+Informaci%C3%B3n+del+Parque+Natural+de+las+Lagunas+de+la+Mata+Carretera+N-332+Alicante-Cartagena,+km+64.+Torrevieja.+El+Bajo+Segura+Alicante!3m5!1s0xd63a831b3bfee07:0x7765305aa0c59820!8m2!3d38.025147!4d-0.6584304!15sCpIBQ2VudHJvIGRlIEluZm9ybWFjacOzbiBkZWwgUGFycXVlIE5hdHVyYWwgZGUgbGFzIExhZ3VuYXMgZGUgbGEgTWF0YSBDYXJyZXRlcmEgTi0zMzIgQWxpY2FudGUtQ2FydGFnZW5hLCBrbSA2NC4gVG9ycmV2aWVqYS4gRWwgQmFqbyBTZWd1cmEgQWxpY2FudGWSAQ9uYXR1cmVfcHJlc2VydmU",
        "lat": 38.0083,
        "lng": 0.658611
    }
];
for ( var i=0; i < markers.length; ++i ) 
{
    L.marker( [markers[i].lat, markers[i].lng] )
        .bindPopup( '<a href="' + markers[i].url + '" target="_blank" rel="noopener">' + markers[i].name + '</a>' )
        .addTo( map );
}

fetch('https://webcat-web.gva.es/webcat_web/datosOnlineRvvcca/obtenerTablaPestanyaDatosOnline', {
  method: 'OPTIONS',
  'Access-Control-Request-Method': 'POST'
});

fetch('https://webcat-web.gva.es/webcat_web/datosOnlineRvvcca/obtenerTablaPestanyaDatosOnline', {
  method: 'POST', 
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  mode: 'cors', 
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': 'JSESSIONID=xq_9mCR4QPyKQ4dhIacH3FAZ4IGdJwIVmYbpQRpD.CMA01; _ga=GA1.2.160489020.1638999253; _gid=GA1.2.1266667940.1638999253; __session:iframe-92826634:selectedTab=0; __session:0.6015672768928244:selectedTab=0; jbosscma7101=ffffffffaf17985c45525d5f4f58455e445a4a422d8d',
    'Access-Control-Allow-Origin': '*'
  },
  body: '' // body data type must match "Content-Type" header
}).then(r => r.json() ).then(console.log);
