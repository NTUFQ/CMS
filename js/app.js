var crisisApp = angular.module('crisisApp',[crisisCtrl]);

crisisApp.run(function(){
  //initialize teh cloud
  AV.initialize('G88YxjYCE1cyDdqDXgJzoiPw-MdYXbMMI', '8wVe3TvItYv02C5YueAOADYi');
  AV.useAVCloudUS();
  ///////////////////////
  var newCrisisList = {

  }
})
crisisApp.factory('getCrisisList', function(){

  return newCrisisList;
})

// once you inset <aaa></aaa> in html
crisisApp.directive('aaa',function(){
  return{
    restrict: 'E',//for element only
    template: "<div>hahhaha</div>"
  }
})

//可以用来做一些鼠标放上去的小动画
app.directive('enter',function(){
  return function(scope, element, attrs){//顺序就是这样的 其他地方scope前面要加$
    element.bind('mouseenter', function(){
      element.addClass('well');
    })
  }
})
app.directive('leave',function(){
  return function(scope, element){
    element.bind('mouseleave', function(){
      element.removeClass('well');
    })
  }
})

//<div aaa1> bestway!!</div>  'C' <div class="C"></div>
crisisApp.directive('aaa1',function(){
  return{
    restrict: 'A',//default A, for attribute. only 'C' for class
    link: function(){
      alert('gg')
    }
  }
})

function crisisCtrl($scope){
    $scope.data = function(){
      return 'good';
    }
}
