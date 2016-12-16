(function(){
	"use strict";

	var module = angular.module("ToDoList");

	module.controller("ToDoController", ctlr);

	ctlr.$inject = ["$scope"];

	function ctlr ($scope){
		$scope.todos = [{desc:'Grocery shopping', done:false}, {desc:'Bath dog', done:false}, {desc:'Mow lawn', done:true}];
	}
}())
