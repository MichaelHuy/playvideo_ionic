FFK.constant('YT_event', {
  STOP:            0, 
  PLAY:            1,
  PAUSE:           2
})
.directive('myYoutube', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div style="height:350px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        console.log('here');
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
        });
    }
  };
})

.directive('youtubetem', ['youtubeEmbed', '$window', function(youtubeEmbed, $window){
	return {
		restrict: 'E',
		template: '<div id="player"></div>',
		link: function(scope, element, attrs){
			youtubeEmbed.yt().then(function(yt){
				$window.onYouTubePlayerAPIReady = function(){
					scope.player = new YT.Player('player', {
						height: attrs.height,
						width: attrs.width,
						videoId: attrs.id
					});					

					scope.createPlayer = function(attrs){
						if(scope.player) scope.player.destroy();
						return new YT.Player('player', {
							height: attrs.height,
							width: attrs.width,
							videoId: attrs.id
						});
					}

				}

				scope.$watch(function(){ return attrs.id;}, function(newVal){
						var videoId = newVal;
						console.log(videoId);
						scope.player = scope.createPlayer(attrs);
				});

			});
		}
	};
}])
.directive('youtube', function($window, YT_event) {
  return {
    restrict: "E",

    scope: {
      height: "@",
      width: "@",
      videoid: "@"
    },

    template: '<div></div>',

    link: function(scope, element) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;

      $window.onYouTubeIframeAPIReady = function() {

        player = new YT.Player(element.children()[0], {
          playerVars: {
            autoplay: 0,
            html5: 1,
            theme: "light",
            modesbranding: 0,
            color: "white",
            iv_load_policy: 3,
            showinfo: 1,
            controls: 1
          },

          height: scope.height,
          width: scope.width,
          videoId: scope.videoid, 
        });
      }

      scope.$watch('videoid', function(newValue, oldValue) {
          console.log(newValue +"and oldvalue: " + oldValue);
        if (newValue == oldValue) {
          return;
        }
         // player.destroy();

        player.cueVideoById(scope.videoid);

      }); 

      scope.$watch('height + width', function(newValue, oldValue) {
        if (newValue == oldValue) {
          return;
        }

        player.setSize(scope.width, scope.height);

      });

      scope.$on(YT_event.STOP, function () {
        player.seekTo(0);
        player.stopVideo();
      });

      scope.$on(YT_event.PLAY, function () {
        player.playVideo();
      }); 

      scope.$on(YT_event.PAUSE, function () {
        player.pauseVideo();
      }); 

    }  
  };
});