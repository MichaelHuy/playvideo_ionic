FFK.directive('menuItem', ['$timeout', function (timeout) {
        return {
            restrict: "AE",
            templateUrl: 'js/components/funitem/template.html',
            scope:{
               item:"="
            },
            link: function (scope, elem, attrs) {
            }
        };
}]);