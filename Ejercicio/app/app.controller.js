/**
 * Created by Alejo Saa G on 24/03/2016.
 */
(function(){
    'use strict';

    angular.module('app').controller('appController', appController);

    appController.$inject = ['$scope'];

    function appController($scope)
    {
        var self = this;

        self.test='al menos ya tengo el controlador.';
    }
}());