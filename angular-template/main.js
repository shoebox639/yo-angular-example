var module = angular.module('app', []);

module.controller('ctrl', ['$scope', 'svc', function($scope, svc) {
    $scope.title = 'hello world!';

    $scope.alertMe = function(val) {
        alert('I was pressed and val was ' + val + '.');
    }

    $scope.count = function() {
        return svc.count;
    }

    $scope.increment = function(x) {
        svc.increment(x);
    }

}]);

module.controller('anotherCtrl', ['$scope', 'svc', function($scope, svc) {
    $scope.count = function() {
        return svc.count;
    }
}]);

module.service('svc', function() {
    return {
        count: 0,
        increment: function(x) {
            x = parseInt(x) || 1;
            this.count += x;
        }
    }
});

module.directive('yoRedParagraph', function() {
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope: true,
        template: '<div><p ng-click="clicked()" ng-class="{red: isRed}" ng-transclude></p></div>',
        controller: ['$scope', function($scope) {
            $scope.clicked = function() {
                $scope.isRed = !$scope.isRed;
                // alert('I was pressed');
            };          
        }]
    };
});