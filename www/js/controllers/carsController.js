FFK
.controller('CarsCtrl', function($rootScope, $scope, $location, $http, $log, $ionicLoading, SearchService, VideosService) {
    // $ionicLoading.show();

    // SearchService.getListVideoByPlaylistId($rootScope.currentCarPlaylist)
    //       .success( function (data) {
    //     var results = VideosService.listResults(data);
    //     $scope.results = results;
    //       $log.info(JSON.stringify(results));
    //       $ionicLoading.hide();
    //   })
    //   .error( function () {
    //     $ionicLoading.hide();
    //     alert("Please check network or turn on 3G");
    //     $log.info('Search error');
    //   });
    $scope.titleHeader = $rootScope.titleHeader;
    //$ionicLoading.show();
    $scope.currentPageToken = "";
    $scope.hasMoreData = true;
    $scope.results = [];
    


  $scope.loadMore = function(){
      SearchService.getMoreListVideoByPlaylistId($rootScope.currentMoviePlaylist, $scope.currentPageToken)
          .success(function (data) {
            if (!data.nextPageToken) {
              $scope.hasMoreData = false;
              $scope.currentPageToken = "";            
            } else {
              $scope.currentPageToken = data.nextPageToken;
            }          
          var newResults = VideosService.listResults(data);
          $scope.results = $scope.results.concat(newResults);
          $scope.$broadcast('scroll.infiniteScrollComplete');
      })
      .error( function () {
        //alert("Please check network or turn on 3G");
        $log.info('Search error');
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });    
  };


    $scope.viewMoviePlayList = function (playlist) {
      var videoId = playlist.resourceId.videoId;
      $rootScope.currentVideoPlayTitle = playlist.title;
      $location.path("/tab/cars/"+videoId);

    }

    
    
})