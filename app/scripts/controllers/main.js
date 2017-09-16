'use strict';

/**
 * @ngdoc function
 * @name appBApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appBApp
 */
angular.module('appBApp')
    .controller('MainCtrl', ["$scope", "$uibModal", "Notes", function ($scope, $uibModal, Notes) {
        $scope.messages = [
            {
                user: "user",
                data: "Hello! This is a test message"
            },
            {
                user: "robo",
                data: "I don't want to talk to you!"
            },
            {
                user: "robo",
                data: "Go away!"
            },
            {
                user: "user",
                data: "Why not?"
            }
        ];

        $scope.notes = Notes.list;

        $scope.chatInput = '';

        $scope.send = function () {
            if (!$scope.chatInput) {
                return;
            }

            $scope.messages.push({
                "user": "user",
                "data": $scope.chatInput
            });

            $scope.messages.push({
                "user": "robo",
                "data": "I'm not listening!"
            });

            $scope.chatInput = '';
        };

        $scope.openNoteEditor = function (noteID) {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/note-editor.html',
                controller : 'NoteEditorCtrl',
                resolve    : {
                    id: noteID
                }
            });
        }

    }]);
