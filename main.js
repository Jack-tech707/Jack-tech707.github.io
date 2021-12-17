const apiKey= 'pk.eyJ1IjoiamFja21idWd1YSIsImEiOiJja3g5Ymhld20wNXo2MnFtd3ZuMGRmendvIn0.fDo6GdeQuCH8v-xbp05YMg';
const mymap = L.map('map').setView([-1.2864684200913767, 36.81782848132152],16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

//adding marker
const marker=L.marker([-1.287057856023698, 36.8181687136094]).addTo(mymap);

//add popup message
let template=`
<h2>Nyayo House</h2>
`
marker.bindPopup(template);

//add circle
const circle= L.circle([-1.287057856023698, 36.8181687136094], {
    radius:150,
    color:'green',
    fillColor: 'tomato',
    fillOpacity:0.3
}).addTo(mymap).bindPopup('I am a circle aroud Nyayo house');

//add polygon

const polygon=L.polygon([
    [-1.2844319642029358, 36.81534233604459],
    [-1.2852686029929783, 36.811630159010484],
    [-1.2878643267246022, 36.81109371724255],
    [-1.287735613213382, 36.814097791142984],
    // [-1.2854831257155181, 36.81755247612847],
    [-1.2844319642029358, 36.81534233604459]

], {color:'orange',
fillColor:'yellow',
fillOpacity:0.4
}).addTo(mymap).bindPopup('I am a polygon');

// polygon.bindPopup('I am a polygon')