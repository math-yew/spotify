angular.module('spotify')
.directive('idDir', function(){
  return {
    restrict: 'E',
    templateUrl: './js/directives/idDir.html',
    controller: function ($scope) {
      $scope.toggle = false;
      $scope.slide = function () {
        $scope.toggle = !$scope.toggle;
      }

      },
    link: function (scope, element, attr) {
      console.log(element);
      // var corn = element.find('corner');
      // var cornFix = element.find('corner-fix');
      // console.log("my directive: ", corn, cornFix);
      // corn.on('click',function() {
      //     cornFix.animate({'left':'100px'});
      //   })
      }

//////end retern
  }

})
