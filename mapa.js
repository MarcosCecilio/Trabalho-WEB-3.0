
var map = L.map('map').setView([-23.66129, -49.26211], 14); // Coordenadas do mapa e nível de zoom
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([-23.550520, -46.633308]).addTo(map)
    .bindPopup('Hamburgueria Tio San')
    .openPopup();