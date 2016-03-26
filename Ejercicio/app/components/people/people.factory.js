/**
 * Created by Alejo Saa G on 24/03/2016.
 */
(function(){
    'use strict';

    angular.module('peopleApp').factory('peopleFactory', peopleFactory);

    peopleFactory.$inject = ['$http', '$q'];

    function peopleFactory($http, $q)
    {
        return {
            msg: "Poco a poco se va completando",
            getPeople: getPeople
        };

        function getPeople()
        {
            return $q(function(resolve, reject) {
                $http.get('http://localhost:63342/js/Ejercicio/app/server/MOCK_DATA2.json')
                    .then(function(promise){
                        resolve(promise.data);
                    }, function(reason){
                        reject(reason);
                    });
            });
        }
    }
}());