angular.module('personalApi', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/home/homeTmpl.html',
        controller: 'homeCtrl'
    })
    .when('/me', {
        templateUrl: 'app/me/meTmpl.html',
        controller:  'meCtrl'
    })
    .when('/skills', {
        templateUrl: 'app/skills/skillsTmpl.html',
        controller: 'skillsCtrl'
    })
    .otherwise('/');
});
