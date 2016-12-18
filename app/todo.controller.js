(function(){
	"use strict";

	var module = angular.module("ToDoList");

	module.controller("ToDoController", ctlr);

   ctlr.$inject = ["$scope", "todoRepo"];

   var doneStyle = {"text-decoration":"line-through"};

	function ctlr ($scope, todoRepo){
      $scope.todos = [];

      todoRepo.getAll().then(function(data){
      	$scope.todos = data;
      });

      $scope.markAsDone = function(index){
         $scope.todos[index].done = true;
      };

      $scope.todoStyle = function (done){
         return done ? doneStyle : {};
      };

	}
}())
