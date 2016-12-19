(function(){
	"use strict";

	var module = angular.module("ToDoList");

	module.controller("ToDoController", ctlr);

   ctlr.$inject = ["$scope", "todoRepo", "todo"];

	function ctlr ($scope, todoRepo, todoLogic){
      $scope.todos = [];

      todoRepo.getAll().then(function(data){
      	$scope.todos = data;
      });

      $scope.markAsDone = function(index){
         todoLogic.markAsDone($scope.todos[index]);
      };

      $scope.todoStyle = todoLogic.todoStyle;
	}
}())
