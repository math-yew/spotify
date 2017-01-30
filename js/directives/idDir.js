angular.module('spotify')
.directive('idDir', function(){
  return {
    restrict: 'E',
    templateUrl: './js/directives/idDir.html',
    controller: function ($scope) {
        $scope.flip = true;
        $scope.toWords = function () {
          $scope.flip = false;
        }
        $scope.toPic = function () {
          $scope.flip = true;
        }
      },
    link: function (scope, element, attr) {

      $('.corner').on('click',function() {
          $('.corner-fix').animate({'left':'100px'});
        })
      }

//////end retern
  }

})
