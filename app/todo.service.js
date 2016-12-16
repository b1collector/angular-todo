(function(){
   "use strict";

   var module = angular.module("ToDoList");
   var authors = [{desc:'Grocery shopping', done:false}, {desc:'Bath dog', done:false}, {desc:'Mow lawn', done:true}];

   module.factory("authorsRepo", service);

   service.$inject = [];

   function service(){
      var service = {};

      service.getAll = function (){
         return authors;
      }

      return service;
   }
}())
