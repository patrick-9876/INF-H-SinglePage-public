app.controller("SettingsController", function ($scope, $cookies, $location, UserService) {
    console.log("SettingsController");

    if ($cookies.get('LogedIn') !== "true") {
        $location.url('/login');
    }

    $scope.userID = parseInt($cookies.get('UserId'));

    $scope.users = UserService.GetUser($scope.userID);


    $scope.updatePassKey = function () {
        UserService.SaveUser($scope.users);
        $location.url('/notes');
    };
});