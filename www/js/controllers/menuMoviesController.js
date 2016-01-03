FFK
.controller('MenuMoviesCtrl', function($rootScope, $scope, $http, $log, $ionicLoading, DatabaseService, $state) {
    $ionicLoading.show();
    DatabaseService.getMovieMenu().success( function (data) {
        $scope.items = data;
          $log.info(JSON.stringify($scope.item));
          $ionicLoading.hide();
      })
      .error( function () {
        $ionicLoading.hide();
        //alert("Please check network or turn on 3G");
        $log.info('Search error');
      });
    $scope.clickOnItemOfMenu = function(item) {
      $rootScope.currentMoviePlaylist = item.playlistId;
      $rootScope.titleHeader= item.name;
      $state.go('tab.movies');
    }
    
})