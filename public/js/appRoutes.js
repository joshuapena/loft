angular.module('appRoutes', []).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/attackOfTheSpaceKitty', {
            templateUrl: 'views/attackOfTheSpaceKitty.html',
            controller: 'AttackOfTheSpaceKittyController'
        })
        .when('/snells', {
            templateUrl: 'views/snellsLaw.html',
            controller: 'SnellsController'
        })
        .otherwise({ redirectTo: '/' });
    }]);
