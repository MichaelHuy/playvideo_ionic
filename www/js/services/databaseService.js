FFK
.factory('DatabaseService', function($http, $log) {
  var baseUrl = "http://ffkserver.mybluemix.net";
    return {
        getKidChannelsMenu : function () {
          return $http.get(baseUrl+'/api/kidchannelsplaylist');
        },
        getCarMenu : function () {
          return $http.get(baseUrl+'/api/carplaylist');
        },
        getMovieMenu : function () {
          // var url = baseUrl + "/api/movieplaylist";
          // return $http.get(url);
          return $http.get('json/menuVideoList.json');
        },
        getFavoriteMovie : function () {
          return $http.get(baseUrl+'/api/favorites');
        },
        addItemToFavorite: function(item) {
          return $http.post(baseUrl+'/api/favorites', item);
        },
        deleteItemFavoriteById : function(id) {
          return $http.delete(baseUrl+'/api/favorites/'+ id);
        }
    }
})