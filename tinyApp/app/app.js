angular.module('tinyApp', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        template: '<h1>{{test}}</h1>',
        controller: 'tinyCtrl'
    });
});
