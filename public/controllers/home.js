  angular
    .module('myApp')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$http'];

  function HomeController ($scope, $http) {
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
  };
