angular.module('AngularRails').controller('FormCtrl', function ($scope, $http, ngDialog) {
    $scope.ratings = [{
        current: 3,
        max: 5
    }]

    $scope.onRequestWash = function () {
        data = {email: $scope.email, address: $scope.address, plate: $scope.plate}
        $http.post('/washes/', data).success(function(data) {
            console.log(data);
        });
        ngDialog.close();
        ngDialog.open({ template: 'waiting.html' });
    };

    $scope.onNext = function () {
        ngDialog.close();
        ngDialog.open({ template: 'reviewUs.html' });
    };

    $scope.onDone = function () {
        data = {stars: "3", comment: $scope.comment}
        $http.post('/feedbacks/', data).success(function(data) {
            console.log(data);
        });
        ngDialog.close();
        ngDialog.open({ template: 'thanks.html' });
    };
});


angular.module('AngularRails').directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '=',
            onRatingSelected: '&'
        },
        link: function (scope, elem, attrs) {

            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };

            scope.toggle = function (index) {
                scope.ratingValue = index + 1;
                scope.onRatingSelected({
                    rating: index + 1
                });
            };

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    }
});