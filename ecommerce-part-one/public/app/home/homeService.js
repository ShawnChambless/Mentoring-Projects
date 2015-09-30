angular.module('ecommerce')
.service('homeService', function($http) {

    this.getAll = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/products'
        });
    };

});
