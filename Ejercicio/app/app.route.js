/**
 * Created by Alejo Saa G on 24/03/2016.
 */
(function(){
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise('index.html');

        $stateProvider.state('people',
            {
                url: '/personas',
                templateUrl: "components/people/people.html",
                controller: 'peopleController',
                controllerAs: 'peopleCtrl'
            })
    }
}());