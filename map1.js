function initMap(){
var locations = [
  ['Evil virus aaaaaaaaa', 1.35,104, 4],
  ['Terror Attact', 1.325,103.68, 5],
  ['Fake medication', 1.38,103.77, 3],
  ['Fever', 1.32,103.66, 2],
  ['Elixir', 1.3255,103.95, 1]
];
var Singapore = {lat: 1.325, lng: 103.85};
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: Singapore,
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      var title = '<h5>'+locations[i][0]+'</h5>';
      var link = '<a class="btn btn-primary" href="crisis1'+ i +'.html">More &raquo;</a>';
      infowindow.setContent(title+'<br>'+link);
      infowindow.open(map, marker);
    }
  })(marker, i));
}
}
