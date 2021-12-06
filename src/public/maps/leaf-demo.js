var map = L.map( 'map', {
    center: [38.9959757,-0.1658417],
    minZoom: 12,
    zoom: 15
});

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}).addTo( map );