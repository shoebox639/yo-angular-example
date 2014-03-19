var module = angular.module('app', []);

module.controller('ctrl', ['$scope', function($scope) {
    $scope.foo = 'hello world!';
}]);