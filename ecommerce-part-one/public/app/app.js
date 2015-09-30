angular.module('ecommerce', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider

        .when('/home', {
            templateUrl: 'app/home/homeTmpl.html',
            controller: 'homeCtrl',
            resolve: {
                getProducts: function(homeService) {
                    return homeService.getAll().then(function(resp) {
                        return resp.data;
                    });
                }
            }
        })
        .when('/admin', {
            templateUrl: 'app/admin/adminTmpl.html',
            controller: 'adminCtrl',
            resolve: {
                getProducts: function(homeService) {
                    return homeService.getAll().then(function(resp) {
                        return resp.data;
                    });
                }
            }
        })
        .otherwise('/admin');

});
