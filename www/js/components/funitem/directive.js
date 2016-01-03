FFK.directive('funitem', ['$timeout', function (timeout) {
        return {
            restrict: "AE",
            templateUrl: 'js/components/funitem/template.html',
            scope:{
               funs:"="
            },
            link: function (scope, elem, attrs) {
            }
        };
}]);