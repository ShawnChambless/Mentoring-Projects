angular.module('fatApp')
.controller('homeCtrl', function($scope, homeService, getAllData) {
    $scope.foods = getAllData;
    console.log(getAllData);

    $scope.sendToDB = function(food) {
        homeService.sendToDB(food);
    };

});
