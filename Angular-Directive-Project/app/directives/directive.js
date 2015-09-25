angular.module('directivePractice')
.directive('dirDisplay', function() {
    return {
        templateUrl: 'app/directives/directiveTmpl.html',
        scope: {
            user: '=',
            setUser: '&'
        },
        link: function(scope, elem, attrs) {
            elem.on('click', function() {
                scope.showInfo = !scope.showInfo;
                scope.setUser({user: scope.user});
                scope.$apply();
            });
        }
    };

});
