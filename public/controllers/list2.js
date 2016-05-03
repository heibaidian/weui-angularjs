angular
  .module('myApp')
  .controller('List2Controller', List2Controller);

List2Controller.$inject = ['$scope', '$stateParams', '$http'];

function List2Controller ($scope, $stateParams, $http) {
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
    
    $http.jsonp('http://heibaidian.com/api/arttypes/me/56fdad2ced5f91dd0499db97?callback=JSON_CALLBACK')
    .success(function(arts, status) {
        $scope.arts = arts;
    }).
    error(function(art, status) {
        $scope.arts = arts || "Request failed";
    });

    $scope.list2Filter = function (item) {
      var sel={};
      
      for(var i in $scope.data){
    		if($stateParams.id===$scope.data[i]._id)
          $scope.sel=sel=$scope.data[i];
    	}

      for(var t in sel.articles)
      	if(item._id===sel.articles[t])
      		return item;
    };
};