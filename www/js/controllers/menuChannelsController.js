FFK
    .controller('MenuKidChannelsCtrl', function ($rootScope, $scope, $http, $log, $ionicLoading, DatabaseService, $state) {

        $scope.$watch('online', function (newStatus) {
            if (!newStatus) {
                alert("Currently, Network disconnected!");
            }            
        });

        if ($rootScope.online) {
            $ionicLoading.show();
            DatabaseService.getKidChannelsMenu().success(function (data) {
                    $scope.items = data;
                    $log.info(JSON.stringify($scope.item));
                    $ionicLoading.hide();
                })
                .error(function () {
                    $ionicLoading.hide();
                    //alert("Please check network or turn on 3G");
                    $log.info('Search error');
                });
        } else {}

        $scope.clickOnItemOfMenu = function (item) {
            $rootScope.currentKidChannelPlaylist = item.playlistId;
            $rootScope.titleKidChannel = item.name;
            $state.go('tab.channels');
        }

    })