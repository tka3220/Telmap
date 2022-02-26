var nintendo = L.latLng(34.6655536, 135.5207379);
var map = L.map('mapid').setView(nintendo, 15);

var gray_phone= L.icon({
	iconUrl:'/img/Gray_Icon.png',
	iconSize:[50,75],
	iconAnchor:[25,75],
	popupAnchor:[0,-75]
	});

var green_phone= L.icon({
	iconUrl:'/img/Green_Icon.png',
	iconSize:[50,75],
	iconAnchor:[37,75],
	popupAnchor:[0,-70]
	});

var pink_phone= L.icon({
	iconUrl:'/img/Pink_Icon.png',
	iconSize:[50,75],
	iconAnchor:[37,75],
	popupAnchor:[0,-70]
	});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker(nintendo, {icon:gray_phone}).addTo(map)
  .bindPopup('ここは、大阪上本町駅だよ。')
  .openPopup();

//地図を最大化
map.addControl(new L.Control.Fullscreen());
