(function(){
	'use strict'

	var app = angular.module('deck', ['playing-cards','ngRoute']);

	//$location.path()
	var locPath = {
		deck: 		'/deck',
		hand: 		'/hand',
		about: 		'/about',
		'/hand': 	1,
		'/deck': 	2,
		'/about': 	3
	};

	app.config(function($routeProvider){
		$routeProvider.
			when(locPath['about'], {
				templateUrl: 'partials/about.html',
				controller: 'AboutController'
			}).
			when(locPath['deck'], {
				templateUrl: 'partials/deck.html',
				controller: 'DeckController'
			}).
			when(locPath['hand'], {
				templateUrl: 'partials/hand.html',
				controller: 'DeckController'
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

	app.controller('AppController', ['$http', function($http) {
		var appCtrl = this;
		appCtrl.cards = [];

		$http.get('/data/cards.json').success(function(data){
			appCtrl.cards = data;
		});
						
	}]);

	app.controller('AboutController', function($scope) {

		$scope.author = 'Branden Oden',
		$scope.explain = 'Welcome :)\n\nThis application allows you to view a deck\n' +
						'of playing cards, discard cards from that\n' +
						'deck, shuffle and sort the deck, and draw\n' +
						'cards from that deck.';
	});

	app.directive('copyRight', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/copyright.html'
		};
	});
})();