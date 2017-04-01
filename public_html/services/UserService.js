app.service('UserService', function () {
    var localItems = JSON.parse(localStorage.getItem("users"));
    if (localItems != undefined && localItems.length > 0) {
        var Users = localItems;
    } else {
        var Users = [
            {id: 1, Name: "Demo", Passcode: "0000"}
        ];
        localStorage.setItem("users", angular.toJson(Users));
    }

    this.Login = function ($passcode) {
        var logedin = false;
        Users.forEach(function (User) {
            if (User.Passcode === $passcode) {
                logedin = true;
            }
        });
        return logedin;
    };

    this.GetUserId = function ($passcode) {
        var returnUserId;
        Users.forEach(function (User) {
            if (User.Passcode === $passcode) {
                returnUserId = User.id;
            }
        });
        return returnUserId;
    };


    this.GetUser = function ($userID) {
        var returnUser;
        Users.forEach(function (User) {
            if (User.id === $userID) {
                returnUser = User;
            }
        });
        return returnUser;
    };

    this.SaveUser = function ($user) {
        var save = [$user];
        localStorage.setItem("users", angular.toJson(save));
    };
});