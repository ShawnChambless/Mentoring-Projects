angular.module('personalApi')
.controller('homeCtrl', function($scope, homeService) {

    $scope.showAll = false;

    $scope.getAll = function() {
        homeService.getAll().then(function(resp) {
            $scope.all = resp;
        });
    }();


});
