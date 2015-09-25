angular.module('directivePractice')
.service('weatherService', function($http, $q) {
    this.getWeather = function(city) {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial'
        }).then(function(resp) {
            dfd.resolve({temp: Math.floor(resp.data.main.temp), desc: resp.data.weather[0].description});
        });
        return dfd.promise;
    };
});
