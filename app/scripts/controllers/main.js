'use strict';

/**
 * @ngdoc function
 * @name appBApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appBApp
 */
angular.module('appBApp')
    .controller('MainCtrl', ["$scope", function ($scope) {
        $scope.messages = [
            {
                "user": "Test",
                "data": "Hello! This is a test message"
            },
            {
                "user": "Robo",
                "data": "I don't want to talk to you!"
            }
        ];

        $scope.chatInput = '';

        $scope.send = function() {
            $scope.messages.push({
                "user": "Test",
                "data": $scope.chatInput
            });
            console.log($scope.chatInput);
            $scope.chatInput = '';
        };
    }]);
