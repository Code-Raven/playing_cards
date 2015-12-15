(function(){
	'use strict'

	var app = angular.module('hand'),
		cardsHidden = true,
		numCardsDrawn = 0,
		numCardsChosen = 7,
		animStyle = 'display: none;';

	app.controller('HandController', function($rootScope, $scope, $filter) {

		$scope.getCardsHidden = function() {
			return cardsHidden;
		};

		$scope.getNumCardsDrawn = function() {
			return numCardsDrawn;
		};

		$scope.getNumCardsChosen = function() {
			return numCardsChosen;
		};

	    $scope.chooseNumCards = function(deck, numCards) {
	        numCardsChosen = Math.min(numCards, deck.length);
	    };

	    $scope.hideCards = function(cards, isHidden) {
			cardsHidden = isHidden;
			for(var i = 0, length = cards.length; i < length; ++i) {
				cards[i].hidden = isHidden;
			}
		};

		$scope.removeCards = function(fromDeck, toDeck, cardIndex, numCards) {
			var cards = fromDeck.splice(cardIndex, numCards);
			cards.push.apply(toDeck, cards);
		};

		$scope.drawCards = function(deck, hand) {
			numCardsDrawn = numCardsChosen;
			$scope.removeCards(deck, hand, 0, numCardsDrawn);

			$scope.getAnimStyle = function(cardPos, cardIndex) {

				return 'position: absolute; ' +
					'z-index: ' + cardIndex + '; ' +
					'top: 8px; ' +
					'left: calc(' + cardPos + '); ' +
					'left: -moz-calc(' + cardPos + '); ' +
					'left: -webkit-calc(' + cardPos + '); ' +
					'left: -o-calc(' + cardPos + '); ' +
					'animation-name: animRight' + cardIndex + '; ' +
					'animation-duration: 1s; ' +
					'-webkit-animation-name: animRight' + cardIndex + '; ' +
					'-webkit-animation-duration: 1s;';
			};
		};

		$scope.clearCards = function(deck, hand) {

	    	numCardsDrawn = 0;
	    	$scope.removeCards(hand, deck, 0, hand.length);

			$scope.getAnimStyle = function() {
				return 'display: none;';
			};
		};

		$scope.drawClearCards = function(deck, hand, numCards) {
	    	if(numCardsDrawn) {
	    		$scope.clearCards(deck, hand);
	    	} else {
	    		$scope.drawCards(deck, hand, numCards);
	    	}
	    };
	});
})();