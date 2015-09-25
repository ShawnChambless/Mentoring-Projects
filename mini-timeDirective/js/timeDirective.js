angular.module('timeApp')
.directive('showTime', function() {

    return {
        restrict: 'E',
        template: '<div> The current time is {{time}} </div>',
        link: function(scope, elem, attrs) {
            var currentTime = new Date();
            scope.time = currentTime.toString();
        }
    };

});
