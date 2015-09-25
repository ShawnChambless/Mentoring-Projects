angular.module('directivePractice')
.directive('dirWeather', function() {
    return {
        templateUrl: 'app/directives/dirWeatherTmpl.html',
        scope: {
            currentUser: '=',
            weatherCall: '&'
        },
        controller: function($scope) {
            $scope.$watch('currentUser', function() {
                $scope.weatherCall({city: $scope.currentUser.city}).then(function(resp) {
                    $scope.desc = resp.desc;
                    $scope.temp = resp.temp;
                });
            });
        }
    };
});
