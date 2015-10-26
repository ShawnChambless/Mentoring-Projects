angular.module('ecommerce')
.controller('adminCtrl', function($scope, adminService) {
    $scope.test = adminService.test;
});
