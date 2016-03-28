angular.module('clusterApp', [])
  .controller('MainCtrl', ['$scope', '$http', function($scope, $http, $q) {
    $scope.cluster = [{pid: 1234}];
    $scope.loading = "";
    $scope.getPIDs = function () {
      $scope.cluster = getMyPIDs();
    }

    $scope.getMyPIDs = function () {
      var clusterTemp = [];
      $scope.loading = "Getting cluster...(0/100)";
      for (i = 0; i < 100; ++i) {
        $http.get('/pid').success(function (cluster) {
          clusterTemp.push(cluster);
          $scope.loading = "Getting cluster...(" + clusterTemp.length + "/100)";
          if (clusterTemp.length == 100) {
            $scope.cluster = clusterTemp;
            $scope.loading = "Cluster loaded";
          }
        });
      }
    }
  }]);