angular.module('spotify')
.controller('confirmCtrl', function($scope, mainService, $stateParams){
$scope.confirm = $stateParams.confirm;
$scope.con = "con test";
$scope.songList=mainService.songList;


})
