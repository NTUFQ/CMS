//Defining the classes
var Crisis = AV.Object.extend(
  "Crisis", {
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
    }
  }
);

var CrisisIdList = AV.Object.extend(
  'CrisisIdList', {
    defaults: {
      crisisList: [],
      updateLog:[]
    }
  }
);

var crisisListId = '56f24b5ea1579b0043e79241';

/*
var Crisis = AV.Object.extend(
  "Crisis",
  {
    defaults:{
      title: "None",
      code: 0, //0 for yellow, 1 for red, 2 for black
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
*/
