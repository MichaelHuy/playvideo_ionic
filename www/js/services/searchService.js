FFK
.factory('SearchService', function($http, $log) {
  var baseUrlYoutube = "https://www.googleapis.com/youtube/v3/";
  var key = "AIzaSyBxIZ0ZS2zjicXRsxNFnqY0wVRFhwl7FhQ";
    return {
        getListSearch : function (textToSearch) {
          return $http.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              key: key,
              type: 'video',
              maxResults: '8',
              part: 'id,snippet',
              //fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
              q: textToSearch
            }
          });
        },
        getListFromPlaylistId : function (playlistId) {
          var url = baseUrlYoutube + "playlists?part=snippet&channelId=" +playlistId +"&key=" + key;
          var urlSample = "https://www.googleapis.com/youtube/v3/playlists?part=snippet" +
                        "&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw" +
                        "&key=AIzaSyBxIZ0ZS2zjicXRsxNFnqY0wVRFhwl7FhQ";
          $http.get(urlSample);
        },
        getListVideoByPlaylistId : function (textToSearch) {
          console.log(textToSearch);
          return $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {
            params: {
              key: key,
              part: 'id,snippet',
              type: 'video',
              playlistId: textToSearch,
              maxResults: '25'
            }
          });
        },

        getMoreListVideoByPlaylistId : function (textToSearch, pageToken) {
          console.log(textToSearch);
          return $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {
            params: {
              key: key,
              part: 'id,snippet',
              type: 'video',
              playlistId: textToSearch,
              maxResults: '25',
              pageToken: pageToken
            }
          });
        }

    }
})
