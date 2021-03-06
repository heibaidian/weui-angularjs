angular
  .module('myApp')
  .controller('ListController', ListController);

ListController.$inject = ['$scope', '$stateParams', '$state', '$http'];

function ListController ($scope, $stateParams, $state, $http) {
  	$http.jsonp('http://heibaidian.com/api/styles/me/56fdad2ced5f91dd0499db97?callback=JSON_CALLBACK')
    .success(function(data, status) {
        $scope.data = data;
    }).
    error(function(data, status) {
        $scope.data = data || "Request failed";
    });

    $scope.homeFilter = function (item) {
      return !item.up_style;
    };
    
	  $scope.listFilter = function (item) {
      return item.up_style===$stateParams.id;
    };

    $scope.toPagebar=function(item){
      if(item.is_page==='article'){
        var downStyle={};
        for(var i=0;i<$scope.data.length;i++)
          if($scope.data[i].up_style===item._id)
            downStyle=$scope.data[i];
        $state.go('content',{uid:item._id,id:downStyle.articles[0]});
      }else if(item.is_page==='column')
        $state.go('list', {id:item._id});
    }

    $scope.itemId=$stateParams.id;
    $scope.toPage=function(item){
      if(item.is_page==='article'){
        $state.go('content',{uid:item.up_style,id:item.articles[0]});
      }else if(item.is_page==='column')
        $state.go('list2', {id:item._id});
    }
};
