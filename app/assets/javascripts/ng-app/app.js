angular
    .module('AngularRails', [
        'ngRoute',
        'templates',
        'ngDialog'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            });
       //$locationProvider.html5Mode(true);
    });