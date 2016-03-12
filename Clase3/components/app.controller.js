/**
 * Created by diplomado on 11/03/16.
 */
(function(){
    'use strict';

    angular.module('app').controller('AppController', AppController);

    AppController.$inject = ['$scope'];

    function AppController($scope)
    {
        console.log(this);
        var self = this;
        self.nombre = 'asdsksa';
        self.personas = [{nombre: 'Luna'}, {nombre: 'Izma'}];

        agregar();

        function agregar()
        {
            self.personas.push({nombre: 'Isis'});
        }
    }
}());