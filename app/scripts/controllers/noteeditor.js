'use strict';

/**
 * @ngdoc function
 * @name appBApp.controller:NoteeditorCtrl
 * @description
 * # NoteeditorCtrl
 * Controller of the appBApp
 */
angular.module('appBApp')
    .controller('NoteeditorCtrl', ['$scope', function ($scope) {
        $scope.testText = "This is some text";
    }]);
