angular.module('myApp',['ui.router']).
config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('home', {
      url: "",
      templateUrl: "views/home.html",
      controller: HomeController,
    })
    .state('list', {
      url: "/:id",
      templateUrl: "views/list.html",
      controller: ListController
    })
    .state('list2', {
      url: "/list/:id",
      templateUrl: "views/list2.html",
      controller: List2Controller
    })
    .state('content', {
      url: "/content/:uid/:id",
      templateUrl: "views/content.html",
      controller: ContentController
    })
}]);
