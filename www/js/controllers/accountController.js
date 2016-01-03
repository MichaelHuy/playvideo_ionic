FFK
.controller('AccountCtrl', function($scope, $cordovaSocialSharing) {
  $scope.settings = {
    enableFriends: true
  };
    $scope.shareSocialNetwork = function() {
        console.log("share social");
          $cordovaSocialSharing
            .shareViaFacebook("ABC", "", "www.google.com")
            .then(function(result) {
              // Success!
            }, function(err) {
              // An error occurred. Show a message to the user
            });    
    };
});