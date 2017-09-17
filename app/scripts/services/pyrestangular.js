'use strict';

/**
 * @ngdoc service
 * @name appBApp.pyRestangular
 * @description
 * # pyRestangular
 * Factory in the appBApp.
 */
angular.module('appBApp')
    .factory('pyRestangular', ['Restangular', function (Restangular) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl('http://localhost:5000/');
        });
    }]);
