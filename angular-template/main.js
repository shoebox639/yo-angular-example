var module = angular.module('app', []);

module.service('svc', function() {
    var y = 5;

    this.setNum = function(i) {
        y = i;
    }

    this.add = function(x) {
        return parseInt(x) + parseInt(y);
    }
});

module.controller('ctrl', ['$scope', 'svc', function($scope, svc) {
    $scope.foo = 'good bye world!';

    $scope.setNum = function(i) {
        svc.setNum(i);
    }

    $scope.buttonClicked = function(i) {
        alert(svc.add(i));
    }
}]);

module.controller('ctrl2', ['$scope', 'svc', function($scope, svc) {
    $scope.foo = 'good bye world!';

    $scope.buttonClicked = function(i) {
        alert(svc.add(i));
    }
}]);

module.directive('yoRedParagraph', function() {
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        scope: true,
        template: '<div><p ng-click="clicked()" ng-style="style" ng-transclude></p></div>',
        controller: ['$scope', function($scope) {
            console.log($scope);
            $scope.clicked = function() {

                $scope.style = {color:'red'}
                // alert('I was pressed');
            };          
        }]
    };
});