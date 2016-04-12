var oldlng= 0;
var oldlat= 0;
var parameters = location.search.substring(1).split("&");
var temp = parameters[0].split("=");
var id = unescape(temp[1]);


function loadcrisistoupdate(){
    //get required id from URL
  var query = new AV.Query(Crisis);
  query.get(id).then(
    function(crisis) {
      var oldtitle = crisis.get('title');
      var oldtype = crisis.get('type');
      var olddesc = crisis.get('description');
      var oldcode = crisis.get('code');
      var oldstatus = crisis.get('status');

      //get date
      var oldday = crisis.get('time').getDate();
      var oldmonth = crisis.get('time').getMonth();
      var oldyear = crisis.get('time').getFullYear();
      var olddate = oldday +"/"+oldmonth+"/"+oldyear;

      //get time
      var oldhour = crisis.get('time').getHours();
      var oldminute = crisis.get('time').getMinutes();
      if (oldhour <10){
        oldhour = '0'+oldhour;
      }
      if (oldminute <10){
        oldminute = '0'+oldminute;
      }
      var oldtime = oldhour+":"+oldminute;

      oldlng = crisis.get('longitude');
      oldlat = crisis.get('latitude');

      document.getElementById("crisis_name").value = oldtitle;
      document.getElementById("date").value = olddate;
      document.getElementById("description").value = olddesc;
      document.getElementById("time").value = oldtime;
      document.getElementById("longitude_new").innerHTML = oldlng;
      document.getElementById("latitude_new").innerHTML = oldlat;
      document.getElementById("crisis_code").value=oldcode;
      document.getElementById("crisis_status").value=oldstatus;
      document.getElementById("crisis_type").value=oldtype;
      initMap(Number(oldlng),Number(oldlat));
    }
  )
  //alert ('success');
  //updateMap();
}

function updatecrisis(){
  AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');
  AV.useAVCloudUS();

  // objectId required

  var query = new AV.Query(Crisis);
  query.get(id).then(function(post){
    post.set('title',document.getElementById("crisis_name").value);
    post.set('description',document.getElementById("description").value);
    post.set('code',Number(document.getElementById("crisis_code").value));
    post.set('status',Number(document.getElementById("crisis_status").value));
    post.set('type',Number(document.getElementById("crisis_type").value));
    post.set('longitude',Number(document.getElementById("longitude_new").innerHTML));
    post.set('latitude',Number(document.getElementById("latitude_new").innerHTML));
    var allshelter = [];
    allshelter.push(shelter[parseInt(document.getElementById('cd_shelter1').value)]);
    allshelter.push(shelter[parseInt(document.getElementById('cd_shelter2').value)]);
    allshelter.push(shelter[parseInt(document.getElementById('cd_shelter3').value)]);
    allshelter.push(shelter[parseInt(document.getElementById('cd_shelter4').value)]);
    post.set('shelter',allshelter);
    post.save();
    alert ("Update Successfull");
    window.location="dashboard.html";
  }, function(error) {
    alert ("Update Failed");
  });
  //loads too fast such that data is not saved
}

function initMap(lngvalue,latvalue) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: new google.maps.LatLng(latvalue,lngvalue)
  });

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latvalue,lngvalue),
    map: map
  });

  var geocoder = new google.maps.Geocoder();
  document.getElementById('Geocode').addEventListener('click', function() {
    //marker.setMap(null);
    geocodeAddress(geocoder, map,marker);
  });
}


function geocodeAddress(geocoder, resultsMap,marker) {
  //clearMarkers();
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      document.getElementById('longitude_new').innerHTML = results[0].geometry.location.lng();
      document.getElementById('latitude_new').innerHTML = results[0].geometry.location.lat();
      //alert(savedlocation);
      resultsMap.setCenter(results[0].geometry.location);
      marker.setPosition(results[0].geometry.location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
