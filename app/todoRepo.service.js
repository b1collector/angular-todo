(function(){
   "use strict";

   var module = angular.module("ToDoList");

   module.factory("todoRepo", service);

   service.$inject = ["$http"];

   function service($http){
      var service = {};

      service.getAll = function (){
         return $http.get("/api/todos.json").then(function (response){
		return response.data;
	 });
      }

      return service;
   }
}())
