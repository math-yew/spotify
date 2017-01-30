angular.module('spotify')
.controller('searchCtrl', function ($scope, mainService) {

  $scope.searchPlaylists = function(search){
  mainService.searchPlaylists(search).then(function(response){
          console.log('searchPlaylists: ',response);
    $scope.playlists = response;
  })
}



  $scope.tesst="worked";
})
