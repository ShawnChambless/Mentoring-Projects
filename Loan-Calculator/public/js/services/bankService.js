angular.module('loanCalculator')
.service('loanService', function($http) {
    this.getInterestRate = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/interestRate'
        });
    };
});
