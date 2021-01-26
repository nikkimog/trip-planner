import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpdHRhbnlmZW5uZXkiLCJhIjoiY2trZTdqZGc1MDQ4bzJ2bGoxcWgwdDI0byJ9.LOtH3k9WAf4gGZtoM6BTfA';

const buildMarker = (type, coords) => {
  let newMarker;
  if (type === 'hotel') {
  newMarker = document.createElement("div")
  newMarker.style.width = "32px";
  newMarker.style.height = "39px";
  newMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  } else if (type === 'restaurant') {
    newMarker = document.createElement("div")
    newMarker.style.width = "32px";
    newMarker.style.height = "39px";
    newMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  } else if (type === 'activity') {
    newMarker = document.createElement("div")
    newMarker.style.width = "32px";
    newMarker.style.height = "39px";
    newMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }

return new mapboxgl.Marker(newMarker).setLngLat(coords);
}

export default buildMarker;
