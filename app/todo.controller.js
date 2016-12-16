(function(){
	"use strict";

	var module = angular.module("ToDoList");

	module.controller("ToDoController", ctlr);

   ctlr.$inject = ["$scope", "authorsRepo"];

	function ctlr ($scope, todoRepo){
      $scope.todos = todoRepo.getAll();
	}
}())
