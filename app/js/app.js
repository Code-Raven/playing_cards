(function(){
	'use strict'

	var app = angular.module('app', ['deck','ngRoute']);

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
				controller: 'DeckController',
				controllerAs: 'ctrl'
			}).
			otherwise({
        		redirectTo: locPath['deck']
      		});
	});

	app.run(function($rootScope, $location) {
		//TODO: Test $rootScope.activeTab === '/deck'?
		$rootScope.activeTab = locPath[$location.path()] || locPath['/deck'];
		//TODO: Test pass "deck, hand, and about", get back "/deck, /hand, /about"
		$rootScope.getLocPath = function(path) {
			return locPath[path];
		};
		//TODO: Test pass "deck, hand, and about", get back "1, 2, 3"
		$rootScope.getLocTab = function(path) {
			return locPath[locPath[path]];
		};
	});

	/*//TODO: Implement HTTP later…
	app.controller('AppController', ['$http', function($http) {
		var appCtrl = this;
		appCtrl.cards = [];

		$http.get('/data/cards.json').success(function(data){
			appCtrl.cards = data;
		});
						
	}]);*/
	//TODO: Test, check author and explain values…
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
			templateUrl: 'partials/copyright.html'	//TODO: Test?
		};
	});
})();