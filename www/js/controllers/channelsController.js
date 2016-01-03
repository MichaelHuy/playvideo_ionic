FFK
.controller('KidChannelsCtrl', function($rootScope, $timeout, $scope,$state, $log, $ionicLoading, SearchService, VideosService, $location) {
    $scope.titleHeader = $rootScope.titleKidChannel;
    //$ionicLoading.show();
    $scope.currentPageToken = "";
    $scope.hasMoreData = true;
    $scope.results = [];
    


  $scope.loadMore = function(){
      SearchService.getMoreListVideoByPlaylistId($rootScope.currentKidChannelPlaylist, $scope.currentPageToken)
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
      $rootScope.currentVideoPlayKidChannelTitle = playlist.title;
      $location.path("/tab/channels/"+videoId);

    }


})