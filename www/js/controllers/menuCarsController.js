FFK
.controller('MenuCarsCtrl', function($rootScope, $scope, $state, $log, $ionicLoading, DatabaseService) {

    $ionicLoading.show();
    DatabaseService.getCarMenu().success( function (data) {
        $scope.items = data;
          $log.info(JSON.stringify($scope.items));
          $ionicLoading.hide();
      })
      .error( function () {
        $ionicLoading.hide();
        alert("Please check network or turn on 3G");
        $log.info('Search error');
      });

    $scope.clickOnItemOfMenu = function(item) {
      $rootScope.currentMoviePlaylist = item.playlistId;
      $rootScope.titleHeader= item.name;
      $state.go('tab.cars');
    }

    
})