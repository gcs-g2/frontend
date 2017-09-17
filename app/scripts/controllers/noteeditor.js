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
        var setUp = function() {
            // keep track of the current note
            $scope.currentNoteIndex = _.findIndex(Notes.list, {id: id});
            $scope.currentNote = Notes.list[$scope.currentNoteIndex];

            $scope.originalNote = angular.copy($scope.currentNote);
        };

        setUp();

        // options for editor
        $scope.tinymceOptions = {
            plugins   : 'link image code charmap wordcount',
            toolbar   : 'bold italic underline | styleselect | link subscript superscript | undo redo | alignleft aligncenter alignright |',
            menubar   : false,
            min_height: 300,
            theme     : 'modern'
        };

        // when closing, replace edited note with original version
        $scope.close = function () {
            Notes.list.splice($scope.currentNoteIndex, 1, $scope.originalNote);
            $uibModalInstance.dismiss('cancel');
        };
    }]);
