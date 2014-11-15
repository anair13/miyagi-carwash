angular
    .module('AngularRails', [
        'ngRoute',
        'templates',
        'ngDialog',
        'ngMap'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            });
       //$locationProvider.html5Mode(true);
    });