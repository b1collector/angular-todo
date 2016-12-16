(function(){
	"use strict";

	var module = angular.module("ToDoList");

	module.controller("ToDoController", ctlr);

   ctlr.$inject = ["$scope", "todoRepo"];

	function ctlr ($scope, todoRepo){
      $scope.todos = [];

      todoRepo.getAll().then(function(data){
      	$scope.todos = data;
      });
	}
}())
