angular.module('personalApi')
.factory('homeService', function($http) {
    var factory = {};
    factory = this;

    this.getAll = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/all'
        }).then(function(resp) {
            console.log(resp.data)
            return resp.data;
        });
    };


    return factory;
});
