angular.module('loanCalculator')
.controller('loanCtrl', function($scope, loanService, getInterest) {

    $scope.loanTerm = 48;

    $scope.interest_rate = getInterest.interest_rate;

    $scope.calculatePayment = function(principal) {
        $scope.monthly_payment = ((principal * $scope.interest_rate)/$scope.loanTerm).toFixed(2);
    };

});
