var app = angular.module('Note-App', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) {
    $routeProvider
            .when("/login", {
                templateUrl: "views/login.html",
                controller: "LoginController"
            })
            .when("/note", {
                templateUrl: "views/notes.html",
                controller: "NoteController"
            })
            .when("/settings", {
                templateUrl: "views/settings.html",
                controller: "SettingsController"
            })
            .otherwise({
                redirectTo: "/login"
            });
});
