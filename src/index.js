console.log("hello!");

import mapboxgl from "mapbox-gl";
import buildMarker from "./marker";

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpdHRhbnlmZW5uZXkiLCJhIjoiY2trZTdqZGc1MDQ4bzJ2bGoxcWgwdDI0byJ9.LOtH3k9WAf4gGZtoM6BTfA';


const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const tsBagels = document.createElement("div")
// tsBagels.style.width = "32px";
// tsBagels.style.height = "39px";
// tsBagels.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(tsBagels).setLngLat([-73.982307, 40.728249]).addTo(map)

const marker = buildMarker('hotel', [-74.009, 40.705])
marker.addTo(map);
