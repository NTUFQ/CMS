function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 1.325, lng: 103.85}
  });

  var geocoder = new google.maps.Geocoder();
  document.getElementById('Geocode').addEventListener('click', function() {
    //marker.setMap(null);
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  //clearMarkers();
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      //alert(results[0].geometry.location.lat());
      document.getElementById('longitude_new').innerHTML = results[0].geometry.location.lng();
      document.getElementById('latitude_new').innerHTML = results[0].geometry.location.lat();
      //alert(savedlocation);
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function admin_postcrisis(){
  AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');
  AV.useAVCloudUS();

  /*
  //create a new crisislist to get its id when initialing.
  var crisisList = new Crisislist();
  crisisList.set('length',0);
  crisisList.set('crisislist',[]);
  crisisList.set('updatetime', new Date());
  crisisList.save().then(function(crisisList) {
    console.log('New object created with objectId: ' + crisisList.id);
  }, function(err) {
    // if failed
    console.log('Failed to create new object, with error message: ' + err.message);
  });
  */
  //get all elements required.
  var crisisname = document.getElementById('crisis_name').value;
  var date = new Date(document.getElementById('date').value);
  var description2 = document.getElementById('description').value;
  var code =  Number(document.getElementById("crisis_code").value);
  var status = Number(document.getElementById("crisis_status").value);
  var type = Number(document.getElementById("crisis_type").value);
  var contact = document.getElementById("contact").value;
  var longitude2 = Number(document.getElementById('longitude_new').innerHTML);//document.getElementById('id').value;
  var latitude2 = Number(document.getElementById('latitude_new').innerHTML);//document.getElementById('id').value;

  //save them in a Crisis instance.
  var newCrisis = new Crisis();
  newCrisis.set('title', crisisname);
  newCrisis.set('status', Number(status));
  newCrisis.set('code', Number(code));
  newCrisis.set('time', date);
  newCrisis.set('contact', contact);
  newCrisis.set('description', description2);
  newCrisis.set('longitude', Number(longitude2));
  newCrisis.set('latitude', Number(latitude2));
  newCrisis.set('type', Number(type));
  var allshelter = [];
  allshelter.push(shelter[parseInt(document.getElementById('cd_shelter1').value)]);
  allshelter.push(shelter[parseInt(document.getElementById('cd_shelter2').value)]);
  allshelter.push(shelter[parseInt(document.getElementById('cd_shelter3').value)]);
  allshelter.push(shelter[parseInt(document.getElementById('cd_shelter4').value)]);
  newCrisis.set('shelter',allshelter);
  newCrisis.save().then(function(newCrisis) {
    console.log('New object created with objectId: ' + newCrisis.id);
    //update crisislis
      console.log('Update crisislist successful!');
      window.location = "dashboard.html";
    }, function(error) {
      // if failed
      console.log('Failed to update crisis.');
      //actually we have to delete the crisis object created
    });
}
