function initialize() {
  AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');
  AV.useAVCloudUS();

  //crisis has attributes: title, description, status(0-3), time, location, events[], contact.
  var Crisis = AV.Object.extend(
    "Crisis",
    {
      defaults:{
        title: "Empty title",
        description: "none",
        status: 0,
        location: {lat: 0, lng: 0},
        events:[],
        contact:88888888
      },

      initialize: function(){
        if (!this.get("title")) {
          this.set({"title": this.defaults.title});
        }
      },

      updateLevel: function(level){
        this.set({"status": level});
      },
    }
  );

  var c = new Crisis();
  c.set('title','success');
  c.save().then(function(post) {
    console.log('New object created with objectId: ' + post.id);
  }, function(err) {
    console.log('Failed to create new object, with error message: ' + err.message);
  });
}
