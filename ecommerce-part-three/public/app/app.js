angular.module('ecommerce', ['ngRoute', 'ui.grid'])
.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'app/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .when('/admin', {
            templateUrl: 'app/admin/adminTmpl.html',
            controller: 'adminCtrl'
        })
        .otherwise('/home');
});
