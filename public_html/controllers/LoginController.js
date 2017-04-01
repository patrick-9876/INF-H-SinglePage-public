app.controller("LoginController", function ($scope, $location, $cookies, UserService) {
    console.log("LoginController");

    if ($cookies.get('LogedIn') === "true") {
        console.log("Login TRUE!");
        $location.url('/note');
    }

    $scope.Login = function ($passcode) {
        if (UserService.Login($passcode)) {
            console.log("Login TRUE!");
            $cookies.put('LogedIn', true);
            $cookies.put('UserId', parseInt(UserService.GetUserId($passcode)));
            $location.url('/note');
        } else {
            console.log("Login FALSE");
        }
    };
});