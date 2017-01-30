angular.module('spotify')
.controller('loginCtrl', function ($scope, mainService, $state) {
  $scope.login = function (uname, tok) {
    console.log('ctrlr');
    mainService.login($scope.uname, $scope.tok);
    $state.go('search');

  }
})
