angular
  .module('myApp')
  .controller('ContentController', ContentController);

ContentController.$inject = ['$scope', '$stateParams', '$http', '$sce'];

function ContentController ($scope, $stateParams, $http, $sce) {
	$scope.uid=$stateParams.uid;

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

	$http.jsonp('http://heibaidian.com/api/arttypes/'+$stateParams.id+'?callback=JSON_CALLBACK')
    .success(function(art, status) {
        $scope.art = art;
        $scope.safeHtml=$sce.trustAsHtml($scope.art.content);
    }).
    error(function(art, status) {
        $scope.art = art || "Request failed";
    });

};
