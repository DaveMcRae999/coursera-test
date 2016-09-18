(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope', '$filter']

function LunchCheckController ($scope, $filter) {
  $scope.lunchMessage = "";
  $scope.inputLunch = "";

  $scope.checkLunch = function () {
    var lunchList = $scope.inputLunch;
    if (lunchList=="") {
      $scope.lunchMessage="Please enter data first";
    } else {
      var arrayLunchList = lunchList.split(",");
      if (arrayLunchList.length<=3) {
        $scope.lunchMessage="Enjoy!";
      } else {
        $scope.lunchMessage="Too much!";
      }
    }
  };
}

})();
