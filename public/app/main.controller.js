angular.module(mainModule).controller('MainCtrl',[
  '$scope','newsSvc',
  function($scope, newsSvc)
  {
       $scope.model={};
       $scope.model.news=newsSvc.getAll();
       
  }
  ]);