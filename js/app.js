'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/tala', {
      templateUrl: 'views/tala.html'
    })
    .when('/kijani', {
      templateUrl: 'views/kijani.html'
    })
    .when('/solgonda', {
      templateUrl: 'views/solgonda.html'
    })
    .when('/tuvak', {
      templateUrl: 'views/tuvak.html'
    })
    .otherwise({redirectTo: '/tala'});
}])
