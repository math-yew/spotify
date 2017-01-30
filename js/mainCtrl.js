angular.module('spotify')
.controller('mainCtrl', function ($scope, mainService) {
$scope.test = mainService.test;

$scope.un = mainService.userName;
$scope.tk = mainService.token;

})
