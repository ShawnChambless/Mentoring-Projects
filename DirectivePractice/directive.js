angular.module('directivePractice')
.directive('superDirective', function() {
    return {
        restrict: 'E',
        template: '{{test}}'
        link: function(scope, elements, attributes) {
            scope.test = 'test';
        }
    }
})
