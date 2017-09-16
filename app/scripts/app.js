'use strict';

/**
 * @ngdoc overview
 * @name appBApp
 * @description
 * # appBApp
 *
 * Main module of the application.
 */
angular
    .module('appBApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'restangular',
        'ui.tinymce'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'views/main.html',
                controller  : 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl : 'views/about.html',
                controller  : 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .filter('plainText', function () {
            return function (text) {
                return text ? String(text).replace(/<[^>]+>/gm, '') : '';
            };
        }
    );