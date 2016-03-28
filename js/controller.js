var crisisIdList = new CrisisIdList();
var crisisObjectList = [];

function refresh(){
  getCrisisIdList();
  getCrisisList();
}

function getCrisisIdList(){
  var crisisIdListOnCloud = new CrisisIdList();
  var query = new AV.Query(CrisisIdList);
  query.get(crisisListId).then(function(crisisIdListOnCloud) {
    crisisIdList.set('crisisList',crisisIdListOnCloud.get('crisisList'));
    crisisIdList.set('updateLog',crisisIdListOnCloud.get('updateLog'));
    crisisIdList.set('updatetime',crisisIdListOnCloud.get('updatetime'));
  }, function(error) {
    // if Failed
    console.log('getCrisisIdList Failed');
  });
}


function getCrisisList(){
  for (var i = 0; i < crisisIdList.crisisList.length; i++) {
    var newCrisis = new Crisis();
    var newCrisis.set('id',crisisIdList.pop());
    var query = new AV.Query(Crisis);
    query.get(newCrisis.id).then(function(newCrisis) {
      crisisObjectList.push(newCrisis);
    }, function(error) {
      // if Failed
      console.log('getCrisis Failed');
    });
  }
}
defaults: {
  title: "Default Title.",
  type: 0, // 0 for
  code: 0, // 0 for yellow, 1 for red, 2 for black
  status: 0, // 0 for reported, 1 for verified, 2 for processing, 3 for finished
  time: new Date(),
  contact: '99999999',
  description: 'Default Description.',
  location: {
    longitude: 0,
    latitude: 0
  },
  events: []

function createCrisis(title, type, code, time, contact, description, location){
  var newCrisis = new Crisis();
  newCrisis.set('title',title);
  newCrisis.set('type',type);
  newCrisis.set('code',code);
  newCrisis.set('time',time);
  newCrisis.set('contact',contact);
  newCrisis.set('description',description);
  newCrisis.set('location',location);
  newCrisis.save().then(function(newCrisis) {
    console.log('New object created with objectId: ' + newCrisis.id);
    //update crisislist
    var crisisIdList = new CrisisIdList();
    var crisisListQuery = new AV.Query(crisisIdList);
    //get crisislist
    crisisListQuery.get(crisisListId).then(function(crisisIdList) {
      var updateList = crisisIdList.get('crisisList');
      var updateLog = crisisIdList.get('updateLog');
      updateList.push(newCrisis.id);
      updateLog.push(newCrisis.id);
      crisisIdList.set('crisisList', updatelist);
      crisisIdList.set('updateLog', updateLog);
      updatecrisislist.save();
      refresh();

      console.log('Update crisislist successful!');
    }, function(error) {
      // if failed
      console.log('Failed to update crisislist.');
      //actually we have to delete the crisis object created
    });
  }, function(err) {
    console.log('Failed to create new object, with error message: ' + err.message);
  });
}

function updateCrisis(id, title, type, code, status, time, contact, description, location, events){
  var query = new AV.Query(crisis);
  var newCrisis = new Crisis();
  query.get(id).then(function(newCrisis) {
    newCrisis.set('title', title);
    newCrisis.set('type', type);
    newCrisis.set('code', code);
    newCrisis.set('status', status);
    newCrisis.set('time', time);
    newCrisis.set('contact', contact);
    newCrisis.set('description', description);
    newCrisis.set('location', location);
    newCrisis.set('events', events);
    post.save();

    var crisisIdList = new CrisisIdList();
    var crisisListQuery = new AV.Query(crisisIdList);
    //get crisislist
    crisisListQuery.get(crisisListId).then(function(crisisIdList) {
      var updateLog = crisisIdList.get('updateLog');
      updateLog.push(id);
      crisisIdList.set('updateLog', updateLog);
      updatecrisislist.save();
      refresh();
      console.log('Update crisislist successful!');
    }, function(error) {
      // if failed
      console.log('Failed to update crisislist.');
      //actually we have to delete the crisis object created
    });
  }, function(error) {
    // if failed
    console.log('updateCrisis failed');
  });
}

function deleteCrisis(id){
  var query = new AV.Query(Crisis);
  var newCrisis = new Crisis();
  query.get(id).then(function(newCrisis) {
    newCrisis.destroy().then(function() {
      // successful
      console.log('deleteCrisis done');
      //var crisisIdList = new CrisisIdList();
      var crisisListQuery = new AV.Query(crisisIdList);
      //get crisislist
      crisisListQuery.get(crisisListId).then(function(crisisIdList) {
        var updateCrisisList = crisisIdList.get('crisisList');
        var index = updateCrisisList.indexOf(id);
        if (index > -1) {
          updateCrisisList.splice(index, 1);
        }
        updateLog.push(id);
        crisisIdList.set('updateLog', updateLog);
        updatecrisislist.save();
        refresh();
        console.log('Update crisislist successful!');
      }, function(error) {
        // if failed
        console.log('Failed to update crisislist.');
        //actually we have to delete the crisis object created
      });
    }, function(error) {
      // failed
      console.log('deleteCrisis failed');
    });
  }, function(error) {
    // if Failed
    console.log('getCrisis failed');
  });
}
