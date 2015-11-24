(function () {
  "use strict"

  angular
    .module('blog', [
      'ngRoute'
    ])

    .config(function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: '../views/home.html',
        controller: 'MainController'
      })
      .when('/conversations', {
        templateUrl: '../views/conversation.html',
        controller: 'MainController'
      })
      .when('/404', {
        templateUrl: '../views/404.html'
      })
      .otherwise({redirectTo: '/404'})
    });

})();
