'use strict';

/**
 * @ngdoc function
 * @name appBApp.controller:NoteeditorCtrl
 * @description
 * # NoteeditorCtrl
 * Controller of the appBApp
 */
angular.module('appBApp')
    .controller('NoteEditorCtrl', ['$scope', '$uibModalInstance', 'Notes', 'id', function ($scope, $uibModalInstance, Notes, id) {
        $scope.currentNote = _.findWhere(Notes.list, {id: id});

        $scope.close = function() {
            $uibModalInstance.dismiss('cancel');
        };

        console.log($scope.currentNote);
    }]);
