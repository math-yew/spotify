angular.module('spotify')
.controller('playlistCtrl', function ($scope, mainService, $stateParams) {

  $scope.playId=$stateParams.id;
  $scope.userId=$stateParams.userid;
  $scope.playName=$stateParams.name;
  $scope.playImage=$stateParams.image;
  console.log('pic: ',$scope.playImage);

  if($stateParams){
    mainService.getTracks($scope.playId,$scope.userId).then(function(response){
      $scope.trackList = response.data.items;
    })
  }

  $scope.defaultName = $scope.playName;

///////// Create

  $scope.newPlaylist = function(){
    mainService.newPlaylist($scope.defaultName).then(function(response){
    $scope.newPlaylist = response.data.id;
    console.log("newPlaylist: ", $scope.newPlaylist)
    $scope.addToPlaylist();
    })

  }

///////// Add

$scope.addToPlaylist = function(){
mainService.addToPlaylist($scope.newPlaylist).then(function(response){
        console.log('added songs: ',response);
  $scope.addedPlaylistMessage = response;
})
}

///////////

///end
})
