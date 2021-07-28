
const busStops = [
    [-74.199254, 40.795661],
    [-74.201818, 40.799138],
    [-74.202614, 40.799840],
    [-74.203868, 40.800716],
    [-74.206369, 40.803555],
    [-74.209774, 40.807037],
    [-74.204093, 40.812287],
  
  ];
  
  
  
  
  
  
  // TODO: add your own access token
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZmNheWVtaXR0ZSIsImEiOiJja3JpanVtYWUxdDQyMnBtNGVmc25xb3BjIn0.YIuLrO5A4cXju_S5HGHpjg';
  
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-74.1949, 40.7951],
    zoom: 14,
  });
  
  
  let marker = new mapboxgl.Marker().setLngLat([-74.1949, 40.7951]).addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }