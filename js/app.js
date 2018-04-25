
let app = angular.module("academy", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider.


    when('/', {templateUrl: 'partials/home.html', controller: "homeController"}).
    when('/java', {templateUrl: 'partials/java.html', controller: 'javaController'}).
    when('/javascript', {templateUrl: 'partials/front-end.html', controller: 'front-endController'}).
    when('/php', {templateUrl: 'partials/php.html', controller: 'phpController'}).
    when('/course', {templateUrl: 'partials/my-course.html'}).
    when('/login', {templateUrl: 'partials/login.html'}).
    when('/register', {templateUrl: 'partials/register.html'}).
    otherwise({redirectTo: '/'})

}]);


app.controller("homeController", ["$scope", function ($scope) {

    $scope.headerImage = "./images/header-bg.png";
    $scope.introImg = "./images/intro-img.png";

    $scope.lecturer1Image = "./images/speaker-1.png";
    $scope.lecturer2Image = "./images/speaker-2.png";
    $scope.lecturer3Image = "./images/speaker-3.png";
    $scope.lecturer4Image = "./images/speaker-4.png";
    $scope.lecturer5Image = "./images/speaker-5.png";
    $scope.lecturer6Image = "./images/speaker-6.png";

}]);

app.controller("javaController", ["$scope", function ($scope) {


}]);

app.controller("front-endController", ["$scope", function ($scope) {


}]);

app.controller("phpController", ["$scope", function ($scope) {


}]);


