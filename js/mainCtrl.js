angular.module('app')
    .controller("mainCtrl", function($scope, $element) {

        $scope.keydown = function(keyEvent) {
        console.log('keydown -'+keyEvent);
       };

    });
