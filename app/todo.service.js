(function(){
   "use strict";

   var module = angular.module("ToDoList");

   module.factory("todo", service);

   service.$inject = [];

   var doneStyle = {"text-decoration":"line-through"};

   function service($http){
      var service = {};

      service.markAsDone = function (task) {
         task.done = true;
      };

      service.todoStyle = function (done) {
         return done ? doneStyle : {};
      };

      return service;
   }
}())
