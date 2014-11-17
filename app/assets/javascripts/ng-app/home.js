angular.module('AngularRails').controller('HomeCtrl', function ($scope, ngDialog) {
    $scope.clickToOpen = function () {
        ngDialog.open({ template: 'requestWash.html' });
    };

    $scope.$on('mapInitialized', function(event, map) {
        
    });
});
