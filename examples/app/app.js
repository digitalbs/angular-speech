angular.module("speechExample", [
        "ngRoute",
        "digitalbs.speech",
        "digitalbs.examples.controllers"
    ])

/**
 * Sets up Angular Application settings (Routing, etc...)
 * @class config
 * @constructor
 * @param $routeProvider {Object} Angular provider that allows us to configure routes in the application
 * @param $locationProvider {Object} Angular provider that configures how the applications deep links paths are stored
 */
    .config(["$routeProvider", "$locationProvider",
        function ($routeProvider, $locationProvider) {

            $routeProvider.when("/", {
                templateUrl: 'app/views/providers/speechSynthesis.html',
                controller: 'speechCtrl'
            });

            $locationProvider.html5Mode(false);
        }
    ]);

