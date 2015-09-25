angular.module('tinyApp')
.controller('tinyCtrl', function($scope, tinyService) {
    $scope.tinyTest = function() {
        tinyService.test().then(function(resp) {
            $scope.test = resp;
        });
    }();
});
