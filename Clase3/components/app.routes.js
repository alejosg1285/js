/**
 * Created by diplomado on 11/03/16.
 */
(function (){
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider)
    {
        $stateProvider.state('users', {
            controller: 'UsersController',
            controllerAs: 'userCtrl',
            templateUrl: 'components/users/users.html'
        });
    }
}());