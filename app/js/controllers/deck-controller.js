(function(){
	'use strict'

	var app = angular.module('deck'),
		reverseSort = false,
		attribute = 'suit';

	app.controller('DeckController', function($scope, $filter) {

		$scope.getAttrib = function () {
			return attribute;
		};

		$scope.getReverseSort = function () {
			return reverseSort;
		};

		$scope.removeCards = function(fromDeck, toDeck, cardIndex, numCards) {
			var cards = fromDeck.splice(cardIndex, numCards);
			cards.push.apply(toDeck, cards);
		};

	    $scope.shuffleCards = function(cards, clone, reverse){
	    	attribute = null;	//HACK: to keep shuffled deck from sorting…
	    	reverseSort = reverse || reverseSort;
			cards = $filter("shuffleCards")(cards,
				clone, reverseSort);
		};

		$scope.sortCards = function(cards, attrib, clone, reverse){
			if(attrib) {	//HACK: to keep shuffled deck from sorting…
				attribute = attrib;
				reverseSort = reverse;
				cards = $filter("sortCards")(cards,
					attrib, clone, reverseSort);
			}
		};
	});

	app.filter('shuffleCards', function(){
		return function(deck, clone, reverse) {
			if (!angular.isArray(deck)){
				return deck;
			}

			var shuffledDeck = clone ? deck.slice() : deck,
				remainNumCards = shuffledDeck.length,
				swappedCard, randIndex, index;

			//Since Math.random is always less than 1,
			//	don't decrement remainNumCards…
			while(remainNumCards) {	
				randIndex = Math.floor(Math.random() *
					remainNumCards);

				index = --remainNumCards;
				swappedCard = shuffledDeck[index];
				shuffledDeck[index] = shuffledDeck[randIndex];
				shuffledDeck[randIndex] = swappedCard;
			}

			if(reverse) {
				shuffledDeck.reverse();
			}

			return shuffledDeck;
		};
	});

	app.filter('sortCards', function(){
		return function(deck, attribute, clone, reverse) {
			if (!angular.isArray(deck)){
				return deck;
			}

			var sortedDeck = clone ? deck.slice() : deck;

			sortedDeck.sort(function(a, b) {
				var aAttrib = a[attribute],
					bAttrib = b[attribute],
					aNum = parseInt(aAttrib),
					bNum = parseInt(bAttrib);

				//Making sure aNum and bNum aren't NaN…
				if (aNum === aNum && bNum === bNum) {
					if(aAttrib === bAttrib) {
						return a.deckNum - b.deckNum;
					} else {
						return aNum - bNum;
					}
				}

				if(aAttrib === bAttrib) {
					return a.deckNum - b.deckNum;
				} else if (aAttrib > bAttrib) {
					return 1;
				} else {
					return -1;
				}
			});

			if(reverse) {
				sortedDeck.reverse();
			}

			return sortedDeck;
		};
	});

})();