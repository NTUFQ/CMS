AV.initialize('NKxQxqADy7FiTcXfOgLcuW2p-MdYXbMMI', 'zDzuVVdpuJl6o9qsO6KM21x0');
AV.useAVCloudUS();

//crisis has attributes: title, description, status(0-3), time, location, events[], contact.
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

var crisisIdList = new CrisisIdList();
var crisisObjectList = [];

var a = 1;
var doc = this;
angular.module('loadCrisis',[])

.controller('test',function($scope){
  var crisisObjectList = [];
  console.log(a);

  var query = new AV.Query(Crisis);
  $scope.crisislist=[];
  query.limit(100);
  query.find().then(
    function(result){
      $scope.crisislist = result;
      console.log(a);
      doc.a = 2;
      console.log(a);
    },
    function(error){
      console.log(error);
    }
  );
  console.log(a);
});

function save(a){
  crisisObjectList = a;
}
