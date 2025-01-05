mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map', // container ID
  center: coordinates.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  style: "mapbox://styles/mapbox/satellite-streets-v12",
  zoom: 10 // starting zoom
});


const marker = new mapboxgl.Marker({ color: 'red' })
  .setLngLat(coordinates.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML(
      `<h5>${coordinates.location}</h5><p>exact location provided after booking</p>`
    ))
  .addTo(map);
