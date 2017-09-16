'use strict';

/**
 * @ngdoc service
 * @name appBApp.notes
 * @description
 * # notes
 * Factory in the appBApp.
 */
angular.module('appBApp')
    .factory('Notes', ['Restangular', function (Restangular) {

        var list = [
            {
                id: 1,
                title: 'Artificial Intelligence',
                text: 'Artificial Intelligence is very very important',
                due: '',
                status: 'pending'
            },
            {
                id: 2,
                title: 'DAA',
                text: 'DAA is the most important',
                due: '',
                status: 'pending'
            },
            {
                id: 3,
                title: 'DBMS',
                text: 'DBMS can be flunked!',
                due: '',
                status: 'pending'
            }
        ];

        // Public API here
        return {
            list: list
        };
    }]);
