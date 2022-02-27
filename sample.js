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


function onLocationFound(e) {
	var centerIcon = L.divIcon({ className: 'center-icon', iconAnchor: [8, 8] });
	L.marker(e.latlng, {icon: centerIcon}).addTo(map);
}
function onLocationError(e) {
	alert('位置情報を取得できませんでした。' + e.message);
}
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
map.locate({setView: true, maxZoom: 16, timeout: 20000});


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var osmGeocoder = new L.Control.OSMGeocoder({
	collapsed: false,
	text: '検索',
	placeholder: '住所を入力してください。',
	callback: function (results) {
		var coords = L.latLng(results[0].lat,results[0].lon);
		var foundIcon = L.divIcon({ className: 'found-icon', iconAnchor: [8, 8] });
		L.marker(coords, {icon: foundIcon}).addTo(map);
		map.setView(coords,17);
	}
});

L.marker(nintendo, {icon:gray_phone}).addTo(map)
  .bindPopup('ここは、大阪上本町駅だよ。')
  .openPopup();

//地図を最大化
map.addControl(new L.Control.Fullscreen());
