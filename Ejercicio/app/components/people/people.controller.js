/**
 * Created by Alejo Saa G on 24/03/2016.
 */
(function(){
    'use strict';

    angular.module('peopleApp').controller('peopleController', peopleController);

    peopleController.$inject = ['peopleFactory', 'ngTableParams'];

    function peopleController(peopleFactory, ngTableParams)
    {
        var self = this;

        self.patternText = /^[a-zA-Z]*$/;
        self.msj = peopleFactory.msg;
        self.newPerson = {};
        self.addPerson = addPerson;

        peopleFactory.getPeople().then(function(response){
            //self.people = response;

            self.tableParams = new ngTableParams({
                    page: 1,
                    count: 30,
                    filter: {}
                },
                {
                    total: response.length,
                    getData: function($defer, params){
                        $defer.resolve(response.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });

        }, function(error){
            console.log(error);
        });

        function addPerson()
        {
            self.newPerson.id = self.people.length + 1;
            self.people.push(self.newPerson);
            self.formNew = false;
        }
    }
}());