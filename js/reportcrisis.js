var Crisis = AV.Object.extend(
  "Crisis",
  {
    defaults:{
      title: "None",
      status: 0,
      time: new Date('2016-1-1'),
      contact:'90009000'
      description: "None",
      longitude: 0,
      latitude: 0,
      events:[]
    },

    initialize: function(){
      if (!this.get("title")) {
        this.set({"title": this.defaults.title});
      }
    },

    updateLevel: function(level){
      this.set({"status": level});
    }
  }
);

function report() {
  AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');
  AV.useAVCloudUS();

  var title2 = document.getElementById('title2').value;
  var time2 = new Date(document.getElementById('time2').value);
  var contact2 = document.getElementById('contact2').value;
  var description2 = document.getElementById('description2').value;
  var longitude2 = document.getElementById('id').value;
  var latitude2 = document.getElementById('id').value;

  var newCrisis = new Crisis();
  newCrisis.set('title', title2);
  newCrisis.set('status', 0);
  newCrisis.set('time', time2);
  newCrisis.set('contact', contact2);
  newCrisis.set('description', description2);
  newCrisis.set('longitude', longitude2);
  newCrisis.set('latitude', latitude2);
  newCrisis.save().then(function(post) {
    console.log('New object created with objectId: ' + post.id);
  }, function(err) {
    console.log('Failed to create new object, with error message: ' + err.message);
  });

}
