(function (){
   "use strict";

   var module = angular.module("ToDoList");

   module.directive("todoItem", todoItem);

   todoItem.$inject = ["todo"];

   var restrict = "E";
   var template = "<em ng-style=\"todoStyle()\" ng-bind=\"todo.desc\"></em><button ng-if=\"!todo.done\" ng-click=\"markAsDone()\">Complete</button>";
   var scope = { todo: "=todoTask" };
   

   function todoItem(todoLogic){
      function linkFunction (scope, element, attr) {
         scope.todoStyle = function(){
            return todoLogic.todoStyle(scope.todo.done);
         }


         scope.markAsDone = function() {
            todoLogic.markAsDone(scope.todo);
         };
      }

      return {
         restrict: restrict,
         template: template,
         scope: scope,
         link: linkFunction
      };
   }
}())
