angular.module('personalApi')
.controller('meCtrl', function($scope, homeService) {
    $scope.test = homeService.test;
});
