angular.module('ecommerce')
.controller('cartCtrl', function($scope, cartService) {
    $scope.test = cartService.test;
});
