angular.module('AngularRails').controller('HomeCtrl', function ($scope, ngDialog) {
    $scope.things = ['Angular', 'Rails 4.1', 'Working', 'Together!!'];
    $scope.clickToOpen = function () {
        console.log("hi");
        ngDialog.open({ template: 'popupTmpl.html' });
    };

    $scope.$on('mapInitialized', function(event, map) {
        
    });
});
