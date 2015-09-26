angular.module('personalApi')
.controller('skillsCtrl', function($scope, homeService) {
    $scope.test = homeService.test;
});
