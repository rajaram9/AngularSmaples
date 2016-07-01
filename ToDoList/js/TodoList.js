var moduler1 = angular.module('todoApp1',[]);
moduler1.controller('todocontroller', function ($scope) {
    $scope.todolist = [];
    $scope.Archivelist = [];
    $scope.singleSelect = "select";
    $scope.submitclick = function () {
        var temp={};
        temp.name=$scope.name;
        temp.checked = false;
        temp.singleSelect = $scope.singleSelect;
        $scope.todolist.push(temp);
    }
    $scope.deleteClick=function(todoindex){
        $scope.todolist.splice(todoindex,1)
    }
    $scope.Checkbokchange = function (todo, index) {
        $scope.Archivelist.push(todo);
        $scope.todolist.splice(index, 1);
    }
    
});
