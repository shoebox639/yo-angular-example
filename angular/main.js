require.config({
    paths: {
        angular: 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    }
});

require(['angular', 'angular-route'], function(angular) {
    var module = angular.module('app', ['ngRoute']);

    module.controller('ctrl', ['$scope', function($scope) {
        $scope.foo = 'hello world!';
    }]);

    module.config(function() {

    });

    angular.bootstrap(document, [module.name]);
});