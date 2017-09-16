'use strict';

/**
 * @ngdoc function
 * @name appBApp.controller:NoteeditorCtrl
 * @description
 * # NoteeditorCtrl
 * Controller of the appBApp
 */
angular.module('appBApp')
    .controller('NoteEditorCtrl', ['$scope', 'Notes', 'id', function ($scope, Notes, id) {
        $scope.currentNote = _.findWhere(Notes.list, {id: id});
        console.log($scope.currentNote);
    }]);
