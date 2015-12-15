(function(){
	'use strict'

	var app = angular.module('app', [
		'deck', 'hand', 'about', 'ngRoute'
	]);

	//$location.path()
	var locPath = {
		deck: 		'/deck',
		hand: 		'/hand',
		about: 		'/about',
		'/deck': 	1,
		'/hand': 	2,
		'/about': 	3
	};

	app.config(function($routeProvider){
		$routeProvider.
			when(locPath['about'], {
				templateUrl: 'partials/about.html',
				controller: 'AboutController',
				controllerAs: 'ctrl'
			}).
			when(locPath['deck'], {
				templateUrl: 'partials/deck.html',
				controller: 'DeckController',
				controllerAs: 'ctrl'
			}).
			when(locPath['hand'], {
				templateUrl: 'partials/hand.html',
				controller: 'HandController',
				controllerAs: 'ctrl'
			}).
			otherwise({
        		redirectTo: locPath['deck']
      		});
	});

	app.run(function($rootScope, $location) {
		$rootScope.activeTab = locPath[$location.path()] || locPath['/deck'];

		$rootScope.getLocPath = function(path) {
			return locPath[path];
		};

		$rootScope.getLocTab = function(path) {
			return locPath[locPath[path]];
		};
	});
})();