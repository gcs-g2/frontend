'use strict';

/**
 * @ngdoc service
 * @name appBApp.notes
 * @description
 * # notes
 * Factory in the appBApp.
 */
angular.module('appBApp')
    .factory('Notes', ['pyRestangular', function (pyRestangular) {

        // Public API here
        return {
            list  : [],
            getAll: function () {
                return pyRestangular.all('notes').getList();
            },
            get   : function (id) {
                return pyRestangular.one('note', id);
            }
        };
    }]);
