var nintendo = L.latLng(34.9697112, 135.7562166);
var map = L.map('mapid').setView(nintendo, 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker(nintendo).addTo(map)
  .bindPopup('Hello, world!')
  .openPopup();
