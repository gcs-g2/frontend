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

        $scope.tinymceOptions = {
            plugins: 'link image code charmap wordcount',
            toolbar: 'bold italic | styleselect | link subscript superscript | undo redo | alignleft aligncenter alignright |',
            menubar: false,
            min_height: 100,
            theme : 'modern'
        };

        $scope.close = function() {
            $uibModalInstance.dismiss('cancel');
        };

        console.log($scope.currentNote);
    }]);
