function initMap(){
  var query = new AV.Query(Crisis);
  query.limit(40);
  query.find().then(function(locations){
    console.log(locations);
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
        position: new google.maps.LatLng(locations[i].get('latitude'), locations[i].get('longitude')),
        map: map
      });
      console.log(locations[i].get('longitude'));
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          var title = '<h5>'+locations[i].get('title')+'</h5>';
          var link = '<a class="btn btn-primary" href="crisis1'+ i +'.html">More &raquo;</a>';
          infowindow.setContent(title+'<br>'+link);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  });
}
