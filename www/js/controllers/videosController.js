FFK.controller('VideoPlayCtrl', function ($rootScope, $scope, VideosService, $stateParams) {

//    $scope.trustSrc = function(src) {
//      return $sce.trustAsResourceUrl(src);
//    }
//    var baseURL = "http://www.youtube.com/embed/";
//   $scope.currentURL = baseURL + $stateParams.movieId + "?autoplay=1&origin=http://example.com";
//

   $scope.currentVideoPlayTitle = $rootScope.currentVideoPlayKidChannelTitleTitle;
    
    $scope.code = $stateParams.movieId;

    
    

});