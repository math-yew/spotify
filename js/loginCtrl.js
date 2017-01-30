angular.module('spotify')
.controller('loginCtrl', function ($scope, mainService) {
  $scope.login = function (uname, tok) {
    mainService.login(uname, tok);
    $state.go('search');
  }
})
