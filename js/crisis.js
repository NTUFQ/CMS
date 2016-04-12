AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');
AV.useAVCloudUS();
var Crisis = AV.Object.extend(
  "Crisis",
  {
    defaults:{
      title: "None",
      code: 0,//0 for yellow 1 for red 2 for black;
      status: 0,
      type: 1,//1 for terror, 2 for disease
      time: new Date('2016-1-1'),
      contact: '9999-9999',
      description: 'no description yet',
      longitude: 0,
      latitude: 0,
      events:[]
    }
  }
);
/*
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

var crisislistid = '56f24b5ea1579b0043e79241';*/
