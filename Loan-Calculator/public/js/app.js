angular.module('loanCalculator', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
    .otherwise('/interestRate')
    .when('/interestRate', {
        templateUrl: 'js/templates/interestTemplate.html',
        controller: 'loanCtrl',
        resolve: {
            getInterest: function(loanService) {
                return loanService.getInterestRate().then(function(resp) {
                    return resp.data;
                });
            }
        }
    });
});
