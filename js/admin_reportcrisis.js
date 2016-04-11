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
      document.getElementById('longitude').innerHTML = results[0].geometry.location.lng();
      document.getElementById('latitude').innerHTML = results[0].geometry.location.lat();
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

function adminreport(){
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
  var longitude2 = document.getElementById('longitude').innerHTML;//document.getElementById('id').value;
  var latitude2 = document.getElementById('latitude').innerHTML;//document.getElementById('id').value;
  var code2 = 0;

  //save them in a Crisis instance.
  var newCrisis = new Crisis();
  newCrisis.set('title', crisisname);
  newCrisis.set('status', 0);
  newCrisis.set('code', code2);
  newCrisis.set('time', date);
  newCrisis.set('contact', contact2);
  newCrisis.set('description', description2);
  newCrisis.set('longitude', Number(longitude2));
  newCrisis.set('latitude', Number(latitude2));
  newCrisis.save().then(function(newCrisis) {
    console.log('New object created with objectId: ' + newCrisis.id);
    //update crisislist
    var updatecrisislist = new Crisislist();
    var crisislistquery = new AV.Query(Crisislist);
    //get crisislist
    crisislistquery.get(crisislistid).then(function(updatecrisislist) {
      var updatelist = updatecrisislist.get('crisislist');
      updatelist.push(newCrisis.id);
      updatecrisislist.set('crisislist', updatelist);
      updatecrisislist.set('length', updatelist.length);
      updatecrisislist.set('updatetime', new Date());
      updatecrisislist.save();
      console.log('Update crisislist successful!');
      window.location = "crisislist.html";
    }, function(error) {
      // if failed
      console.log('Failed to update crisislist.');
      //actually we have to delete the crisis object created
    });
  }, function(err) {
    console.log('Failed to create new object, with error message: ' + err.message);
  });
}
