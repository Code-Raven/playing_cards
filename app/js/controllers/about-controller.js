(function(){
	'use strict'

	var app = angular.module('about');

	//TODO: Test, check author and explain values…
	app.controller('AboutController', function($scope) {
		$scope.author = 'Branden Oden',
		$scope.explain = 'Welcome :)\n\nThis application allows you to view a deck\n' +
						'of playing cards, discard cards from that\n' +
						'deck, shuffle and sort the deck, and draw\n' +
						'cards from that deck.';
	});
})();