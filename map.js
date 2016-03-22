function initMap() {
  var Singapore = {lat: 1.325, lng: 103.85};
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: Singapore,
    zoom: 12
  });

  var locations = [{1.4,103.9},
  {1.32,103.4},
{1.31,103.33},
{1.325,102.99},
{1.344,103.66}];
  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][0], locations[i][1]),
    map: map
  });
}
}
