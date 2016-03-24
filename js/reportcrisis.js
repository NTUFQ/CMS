function report(){
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
  var title2 = document.getElementById('title').value;
  var time2 = new Date(document.getElementById('time').value);
  var contact2 = document.getElementById('contact').value;
  var description2 = document.getElementById('description').value;
  var longitude2 = 0;//document.getElementById('id').value;
  var latitude2 = 0;//document.getElementById('id').value;
  var code2 = 0;

  //save them in a Crisis instance.
  var newCrisis = new Crisis();
  newCrisis.set('title', title2);
  newCrisis.set('status', 0);
  newCrisis.set('code', code2);
  newCrisis.set('time', time2);
  newCrisis.set('contact', contact2);
  newCrisis.set('description', description2);
  newCrisis.set('longitude', longitude2);
  newCrisis.set('latitude', latitude2);
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
