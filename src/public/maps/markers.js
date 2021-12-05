markers = [
    {
      "name": "Prat de Cabanes",
      "url": "https://www.google.com/maps/place/Parque+Natural+Prado+de+Cabanes-Torreblanca/@40.1373455,0.1651026,15z/data=!4m2!3m1!1s0x0:0x511ed0c94fc98c22?sa=X&ved=2ahUKEwjM1r7Nvsz0AhWBCZ0JHaPGBE4Q_BJ6BAhpEAU",
      "lat": 40.1369444,
      "lng": 0.16555555
    },
    {
      "name": "Gandia",
      "url": "https://www.google.com/maps/place/UPV+Campus+de+Gandia+-+Escuela+Politecnica+Superior/@38.9959757,-0.1658417,15z/data=!4m2!3m1!1s0x0:0xdb8ad87b84df4b24?sa=X&ved=2ahUKEwjbzO27vsz0AhVkAp0JHTdbCukQ_BJ6BAhYEAU",
      "lat": 38.9959757,
      "lng": -0.1658417
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
