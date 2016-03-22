function initMap() {
  var Singapore = {lat: 1.325, lng: 103.85};
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: Singapore,
    zoom: 12
  });

}
