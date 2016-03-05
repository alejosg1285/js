/**
 * Created by diplomado on 4/03/16.
 */
//cuando se crea un modulo debe ir con el arreglo.
//Primer opcion de definir un controlador.
/*
 var app = angular.module('demo', []);
app.controller('Students', function($scope){
    $scope.students = [
        {name: 'alejandro', lastName: 'saa'},
        {name: 'maria', lastName: 'saa'},
        {name: 'naty', lastName: 'cardenas'}
    ];
});
*/

//Opcion 3 de definir un modulo.
/*
(function(){
    'use strict';

    angular.module('demo', []).controller('Students', function($scope){
        $scope.students = [
            {name: 'alejandro', lastName: 'saa'},
            {name: 'maria', lastName: 'saa'},
            {name: 'naty', lastName: 'cardenas'}
        ];
    });
}());
*/

//Opcion 4 de definir un modulo.
(function(){
    'use strict';

    angular.module('demo', []).controller('StudentsController', StudentsController);
    //$inject es una anotacion para injeccion de dependencias cuando se minifica el código.
    StudentsController.$inject = ['$scope', '$rootScope'];

    function StudentsController($scope, $rootScope){
        this.students = {
            list: [
                {name: 'alejandro', lastName: 'saa'},
                {name: 'maria', lastName: 'saa'},
                {name: 'naty', lastName: 'cardenas'}
            ],
            saludar: function(students){
                console.log('students');
                console.log(students);
            }
        };

        this.muestre = true;

        console.log('$scope');
        console.log($scope);
    }
}());