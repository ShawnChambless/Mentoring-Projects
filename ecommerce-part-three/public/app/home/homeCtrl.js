angular.module('ecommerce')
.controller('homeCtrl', function($scope, homeService) {
    $scope.test = homeService.test;
});
