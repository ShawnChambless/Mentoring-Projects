angular.module('tinyApp')
.service('tinyService', function($http) {
    this.test = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:1337'
        }).then(function(resp) {
            return $http({
                method: 'GET',
                url: 'www.google.com/?zip=' + resp
            }).then(function(resp) {
                return resp;
            });
        });
    };
});
