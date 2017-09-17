'use strict';

/**
 * @ngdoc function
 * @name appBApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appBApp
 */
angular.module('appBApp')
    .controller('MainCtrl', ["$scope", "$uibModal", "$timeout", "$rootScope","Notes", function ($scope, $uibModal, $timeout, $rootScope, Notes) {
        var currentIndex = -1;
        $scope.messages = [
            {
                user: 'G2_A',
                data: 'Hello there 👋'
            }
        ];
        $scope.chatInput = '';
        $scope.newNote = {
            'title': '',
            'data' : ''
        };

        $scope.messageSequence = [
            {
                field: "title",
                data : "What do you want me to remember for you?"
            },
            {
                field: "date",
                data : "When is it due?"
            },
            {
                field: "create",
                data : "Let's go ahead and create a note for it"
            }
        ];

        Notes.getAll().then(function (resp) {
            Notes.list = resp;
            $scope.notes = Notes.list;
        });

        var askNextQuestion = function () {
            if ($scope.chatInput.includes(' no ') || $scope.chatInput.includes('do not')) {
                currentIndex = 0;
            }

            $timeout(function () {
                $scope.messages.push({
                    user: "G2_A",
                    data: $scope.messageSequence[currentIndex]['data']
                });
            }, 1000);
        };

        // initialize the chatbot
        askNextQuestion();

        $scope.send = function () {
            if (!$scope.chatInput) {
                return;
            }

            if ($scope.messageSequence[currentIndex] && $scope.messageSequence[currentIndex]['field'] === "title") {
                $scope.newNote['noteTitle'] = $scope.chatInput;
            } else if ($scope.messageSequence[currentIndex] && $scope.messageSequence[currentIndex]['field'] === "date") {
                $scope.newNote['date'] = $scope.chatInput;
                $scope.newNote['status'] = "pending"
            }

            $scope.messages.push({
                user: "Ishan",
                data: $scope.chatInput
            });

            currentIndex++;

            if (currentIndex >= $scope.messageSequence.length) {
                $scope.openNoteEditor(-1, $scope.newNote['title'], $scope.newNote['date'], $scope.newNote['pending']);
                currentIndex = 0;
            }

            askNextQuestion();

            $scope.chatInput = '';
        };

        $scope.openNoteEditor = function (noteID, title, date, status) {
            if (!noteID) {
                noteID = -1;
            }

            if (!title) {
                $rootScope.noteTitle = '';
            }

            if (!date) {
                $rootScope.date = moment().format("YYYY:MM:DD HH:mm:ss");
            }

            if (!status) {
                $rootScope.status = 'pending';
            }

            var modalInstance = $uibModal.open({
                templateUrl: 'views/note-editor.html',
                controller : 'NoteEditorCtrl',
                resolve    : {
                    id: noteID
                }
            });
        };

    }]);
