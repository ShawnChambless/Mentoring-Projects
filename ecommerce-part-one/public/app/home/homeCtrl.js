angular.module('ecommerce')
.controller('homeCtrl', function($scope, getProducts) {
    $scope.products = getProducts;
});
