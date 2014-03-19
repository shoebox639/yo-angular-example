var module = angular.module('app', []);

module.controller('ctrl', ['$scope', 'svc', function($scope, svc) {
    $scope.foo = 'good bye world!';

    $scope.alertMe = function(text) {
        alert('button pressed with text: ' + text);
    }

    $scope.increment = function(x) {
        svc.increment(x);
    }

    $scope.counter = function() {
        return svc.counter;
    }
}]);

module.controller('ctrl2', ['$scope', 'svc', function($scope, svc) {
    $scope.counter = function() {
        return svc.counter;
    }
}]);

module.service('svc', function() {
    this.counter = 0;
    this.increment = function(x) {
        x = parseInt(x) || 1;
        this.counter += x;
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