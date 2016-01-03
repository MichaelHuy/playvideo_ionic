FFK
.controller('MoviesCtrl', function($rootScope, $timeout, $scope,$state, $log, $ionicLoading, SearchService, VideosService, $location) {
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
      $location.path("/tab/movies/"+videoId);

    }


})