var Crisis = AV.Object.extend(
  "Crisis",
  {
    defaults:{
      title: "None",
      code: 0,
      status: 0,
      time: new Date('2016-1-1'),
      contact: '9999-9999',
      description: 'no description yet',
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

var Crisislist = AV.Object.extend(
  'Crisislist',
  {
    defaults:{
      length: 0,
      crisislist: [],
      updatetime: new Date()
    }
  }
);

var crisislistid = '56f24b5ea1579b0043e79241';
