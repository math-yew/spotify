angular.module('spotify')
.directive('cutDir', function(){
  return {
    restrict: 'A',

    link: function (scope, element, attr, mainService) {
      element.on('click',function () {
        mainService(track.track.id);
      })
    }

}
})
