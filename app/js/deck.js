(function(){
	'use strict'

	var app = angular.module('playing-cards', []);
	var imgPath = 'svgs/';
	var srcMap = {
		clubs_ace: imgPath + 'clubs_0.svg',
		clubs_2: imgPath + 'clubs_1.svg',
		clubs_3: imgPath + 'clubs_2.svg',
		clubs_4: imgPath + 'clubs_3.svg',
		clubs_5: imgPath + 'clubs_4.svg',
		clubs_6: imgPath + 'clubs_5.svg',
		clubs_7: imgPath + 'clubs_6.svg',
		clubs_8: imgPath + 'clubs_7.svg',
		clubs_9: imgPath + 'clubs_8.svg',
		clubs_10: imgPath + 'clubs_9.svg',
		clubs_jack: imgPath + 'clubs_10.svg',
		clubs_queen: imgPath + 'clubs_11.svg',
		clubs_king: imgPath + 'clubs_12.svg',
		spades_ace: imgPath + 'spades_0.svg',
		spades_2: imgPath + 'spades_1.svg',
		spades_3: imgPath + 'spades_2.svg',
		spades_4: imgPath + 'spades_3.svg',
		spades_5: imgPath + 'spades_4.svg',
		spades_6: imgPath + 'spades_5.svg',
		spades_7: imgPath + 'spades_6.svg',
		spades_8: imgPath + 'spades_7.svg',
		spades_9: imgPath + 'spades_8.svg',
		spades_10: imgPath + 'spades_9.svg',
		spades_jack: imgPath + 'spades_10.svg',
		spades_queen: imgPath + 'spades_11.svg',
		spades_king: imgPath + 'spades_12.svg',
		diamonds_ace: imgPath + 'diamonds_0.svg',
		diamonds_2: imgPath + 'diamonds_1.svg',
		diamonds_3: imgPath + 'diamonds_2.svg',
		diamonds_4: imgPath + 'diamonds_3.svg',
		diamonds_5: imgPath + 'diamonds_4.svg',
		diamonds_6: imgPath + 'diamonds_5.svg',
		diamonds_7: imgPath + 'diamonds_6.svg',
		diamonds_8: imgPath + 'diamonds_7.svg',
		diamonds_9: imgPath + 'diamonds_8.svg',
		diamonds_10: imgPath + 'diamonds_9.svg',
		diamonds_jack: imgPath + 'diamonds_10.svg',
		diamonds_queen: imgPath + 'diamonds_11.svg',
		diamonds_king: imgPath + 'diamonds_12.svg',
		hearts_ace: imgPath + 'hearts_0.svg',
		hearts_2: imgPath + 'hearts_1.svg',
		hearts_3: imgPath + 'hearts_2.svg',
		hearts_4: imgPath + 'hearts_3.svg',
		hearts_5: imgPath + 'hearts_4.svg',
		hearts_6: imgPath + 'hearts_5.svg',
		hearts_7: imgPath + 'hearts_6.svg',
		hearts_8: imgPath + 'hearts_7.svg',
		hearts_9: imgPath + 'hearts_8.svg',
		hearts_10: imgPath + 'hearts_9.svg',
		hearts_jack: imgPath + 'hearts_10.svg',
		hearts_queen: imgPath + 'hearts_11.svg',
		hearts_king: imgPath + 'hearts_12.svg',
		joker_black: imgPath + 'joker_0.svg',
		joker_red: imgPath + 'joker_1.svg',
		hidden: imgPath + 'card_back.svg'
	};

	var cards = [
		{ name: 'clubs_ace', hidden: false, deckNum: 1, suitNum: 1, suit: 'clubs'},
		{ name: 'clubs_2', hidden: false, deckNum: 2, suitNum: 2, suit: 'clubs'},
		{ name: 'clubs_3', hidden: false, deckNum: 3, suitNum: 3, suit: 'clubs'},
		{ name: 'clubs_4', hidden: false, deckNum: 4, suitNum: 4, suit: 'clubs'},
		{ name: 'clubs_5', hidden: false, deckNum: 5, suitNum: 5, suit: 'clubs'},
		{ name: 'clubs_6', hidden: false, deckNum: 6, suitNum: 6, suit: 'clubs'},
		{ name: 'clubs_7', hidden: false, deckNum: 7, suitNum: 7, suit: 'clubs'},
		{ name: 'clubs_8', hidden: false, deckNum: 8, suitNum: 8, suit: 'clubs'},
		{ name: 'clubs_9', hidden: false, deckNum: 9, suitNum: 9, suit: 'clubs'},
		{ name: 'clubs_10', hidden: false, deckNum: 10, suitNum: 10, suit: 'clubs'},
		{ name: 'clubs_jack', hidden: false, deckNum: 11, suitNum: 11, suit: 'clubs'},
		{ name: 'clubs_queen', hidden: false, deckNum: 12, suitNum: 12, suit: 'clubs'},
		{ name: 'clubs_king', hidden: false, deckNum: 13, suitNum: 13, suit: 'clubs'},
		{ name: 'spades_ace', hidden: false, deckNum: 14, suitNum: 1, suit: 'spades'},
		{ name: 'spades_2', hidden: false, deckNum: 15, suitNum: 2, suit: 'spades'},
		{ name: 'spades_3', hidden: false, deckNum: 16, suitNum: 3, suit: 'spades'},
		{ name: 'spades_4', hidden: false, deckNum: 17, suitNum: 4, suit: 'spades'},
		{ name: 'spades_5', hidden: false, deckNum: 18, suitNum: 5, suit: 'spades'},
		{ name: 'spades_6', hidden: false, deckNum: 19, suitNum: 6, suit: 'spades'},
		{ name: 'spades_7', hidden: false, deckNum: 20, suitNum: 7, suit: 'spades'},
		{ name: 'spades_8', hidden: false, deckNum: 21, suitNum: 8, suit: 'spades'},
		{ name: 'spades_9', hidden: false, deckNum: 22, suitNum: 9, suit: 'spades'},
		{ name: 'spades_10', hidden: false, deckNum: 23, suitNum: 10, suit: 'spades'},
		{ name: 'spades_jack', hidden: false, deckNum: 24, suitNum: 11, suit: 'spades'},
		{ name: 'spades_queen', hidden: false, deckNum: 25, suitNum: 12, suit: 'spades'},
		{ name: 'spades_king', hidden: false, deckNum: 26, suitNum: 13, suit: 'spades'},
		{ name: 'diamonds_ace', hidden: false, deckNum: 27, suitNum: 1, suit: 'diamonds'},
		{ name: 'diamonds_2', hidden: false, deckNum: 28, suitNum: 2, suit: 'diamonds'},
		{ name: 'diamonds_3', hidden: false, deckNum: 29, suitNum: 3, suit: 'diamonds'},
		{ name: 'diamonds_4', hidden: false, deckNum: 30, suitNum: 4, suit: 'diamonds'},
		{ name: 'diamonds_5', hidden: false, deckNum: 31, suitNum: 5, suit: 'diamonds'},
		{ name: 'diamonds_6', hidden: false, deckNum: 32, suitNum: 6, suit: 'diamonds'},
		{ name: 'diamonds_7', hidden: false, deckNum: 33, suitNum: 7, suit: 'diamonds'},
		{ name: 'diamonds_8', hidden: false, deckNum: 34, suitNum: 8, suit: 'diamonds'},
		{ name: 'diamonds_9', hidden: false, deckNum: 35, suitNum: 9, suit: 'diamonds'},
		{ name: 'diamonds_10', hidden: false, deckNum: 36, suitNum: 10, suit: 'diamonds'},
		{ name: 'diamonds_jack', hidden: false, deckNum: 37, suitNum: 11, suit: 'diamonds'},
		{ name: 'diamonds_queen', hidden: false, deckNum: 38, suitNum: 12, suit: 'diamonds'},
		{ name: 'diamonds_king', hidden: false, deckNum: 39, suitNum: 13, suit: 'diamonds'},
		{ name: 'hearts_ace', hidden: false, deckNum: 40, suitNum: 1, suit: 'hearts'},
		{ name: 'hearts_2', hidden: false, deckNum: 41, suitNum: 2, suit: 'hearts'},
		{ name: 'hearts_3', hidden: false, deckNum: 42, suitNum: 3, suit: 'hearts'},
		{ name: 'hearts_4', hidden: false, deckNum: 43, suitNum: 4, suit: 'hearts'},
		{ name: 'hearts_5', hidden: false, deckNum: 44, suitNum: 5, suit: 'hearts'},
		{ name: 'hearts_6', hidden: false, deckNum: 45, suitNum: 6, suit: 'hearts'},
		{ name: 'hearts_7', hidden: false, deckNum: 46, suitNum: 7, suit: 'hearts'},
		{ name: 'hearts_8', hidden: false, deckNum: 47, suitNum: 8, suit: 'hearts'},
		{ name: 'hearts_9', hidden: false, deckNum: 48, suitNum: 9, suit: 'hearts'},
		{ name: 'hearts_10', hidden: false, deckNum: 49, suitNum: 10, suit: 'hearts'},
		{ name: 'hearts_jack', hidden: false, deckNum: 50, suitNum: 11, suit: 'hearts'},
		{ name: 'hearts_queen', hidden: false, deckNum: 51, suitNum: 12, suit: 'hearts'},
		{ name: 'hearts_king', hidden: false, deckNum: 52, suitNum: 13, suit: 'hearts'},
	];

	var extraCards = [
		{ name: 'joker_black', hidden: false, deckNum: 53, suitNum: 13, suit: 'zblack'},
		{ name: 'joker_red', hidden: false, deckNum: 54, suitNum: 13, suit: 'zred'},
	];

	app.run(function($rootScope) {
		$rootScope.deck = cards;
		$rootScope.discarded = extraCards;
		$rootScope.hand = [];

		$rootScope.attrib = 'suit';
		$rootScope.numCards = 3;

		$rootScope.numCardsDrawn = 0;
		$rootScope.animStyle = 'display: none;';
	});

	app.controller('DeckController', function($rootScope, $scope, $filter){
		$scope.cardPositions = [
			'50% - 300px - 50px',
			'50% - 250px - 50px',
			'50% - 200px - 50px',
			'50% - 150px - 50px',
			'50% - 100px - 50px',
			'50% - 50px - 50px',
			'50% + 0px - 50px',
			'50% + 50px - 50px',
			'50% + 100px - 50px',
			'50% + 150px - 50px',
			'50% + 200px - 50px',
			'50% + 250px - 50px',
			'50% + 300px - 50px',
		];

		$scope.cardsHidden = true;

	    $scope.numCardsSelected = function(numCardsSelected) {
	        $rootScope.numCards = Math.min(numCardsSelected, $rootScope.deck.length);
	    };

	    $scope.indexOffset = function(cardIndex, numCards) {
	    	var length = numCards || $rootScope.hand.length;

	    	return (cardIndex + Math.floor(($scope.cardPositions.length -
	    		length)/2)) % $scope.cardPositions.length;
	    };

	    $scope.getCardPosition = function(cardIndex, numCards) {
	    	return $scope.cardPositions[$scope.indexOffset(cardIndex, numCards)];
	    };

	    $scope.hideCards = function(cards, isHidden) {
			for(var i = 0, length = cards.length; i < length; ++i) {
				cards[i].hidden = isHidden;
			}
		};

		$scope.removeCards = function(fromDeck, toDeck, cardIndex, numCards) {
			var cards = fromDeck.splice(cardIndex, numCards);
			cards.push.apply(toDeck, cards);
		};

		$scope.drawCards = function(numCards) {

			var deck = $rootScope.deck, hand = $rootScope.hand;

			$rootScope.numCardsDrawn = numCards;
			$scope.removeCards(deck, hand, 0, numCards);

			$scope.getAnimStyle = function(cardIndex) {

				var horizIndex = $scope.indexOffset(cardIndex),
					cardPosition = $scope.getCardPosition(cardIndex);

				return 'position: absolute; ' +
					'z-index: ' + cardIndex + '; ' +
					'top: 8px; ' +
					'left: calc(' + cardPosition + '); ' +
					'left: -moz-calc(' + cardPosition + '); ' +
					'left: -webkit-calc(' + cardPosition + '); ' +
					'left: -o-calc(' + cardPosition + '); ' +
					'animation-name: animRight' + horizIndex + '; ' +
					'animation-duration: 1s; ' +
					'-webkit-animation-name: animRight' + horizIndex + '; ' +
					'-webkit-animation-duration: 1s;';
			};
		};

		($scope.clearCards = function() {
	    	var deck = $rootScope.deck, hand = $rootScope.hand;

	    	$rootScope.numCardsDrawn = 0;
	    	$scope.removeCards(hand, deck, 0, hand.length);

			$scope.getAnimStyle = function() {
				return 'display: none;';
			};
		})();

		$scope.drawClearCards = function(numCards) {
	    	if($rootScope.numCardsDrawn) {
	    		$scope.clearCards();
	    	} else {
	    		$scope.drawCards(numCards);
	    	}
	    };

		($scope.setFilter = function(attrib){
			$rootScope.attrib = attrib;
			switch(attrib) {
				case 'shuffle':
					$rootScope.deck = $filter("shuffleDeck")($rootScope.deck, false);
					break;
				default:
					$rootScope.deck = $filter("sortDeck")($rootScope.deck, attrib);
			}	
		})($rootScope.attrib);
	});

	app.directive('playingCard', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/card.html',

			controller: function($scope) {
				$scope.hideCard = function(card, isHidden) {
					card.hidden = isHidden;
				};

				$scope.getSrc = function(card) {
					var src = card ? (card.hidden ? undefined :
						srcMap[card.name]) : undefined;

					return src || srcMap['hidden'];
				};
			}
		};
	});

	app.filter('shuffleDeck', function(){
		return function(deck, clone) {
			if (!angular.isArray(deck)){
				return deck;
			}

			var shuffledDeck = clone ? deck.slice(0) : deck,
				remainNumCards = shuffledDeck.length,
				swappedCard, randIndex, index;

			//Since Math.random is always less than 1, don't decrement remainNumCards…
			while(remainNumCards) {	
				randIndex = Math.floor(Math.random() *
					remainNumCards);

				index = --remainNumCards;
				swappedCard = shuffledDeck[index];
				shuffledDeck[index] = shuffledDeck[randIndex];
				shuffledDeck[randIndex] = swappedCard;
			}

			return shuffledDeck;
		};
	});

	app.filter('sortDeck', function(){
		return function(deck, attribute) {
			if (!angular.isArray(deck)){
				return deck;
			}

			var sortedDeck = deck.slice(0);

			sortedDeck.sort(function(a, b) {
				var aAttrib = a[attribute],
					bAttrib = b[attribute],
					aNum = parseInt(aAttrib),
					bNum = parseInt(bAttrib);

				if (aNum === aNum && bNum === bNum) {

					if(aAttrib === bAttrib) {
						return a['deckNum'] - b['deckNum'];
					} else {
						return aNum - bNum;
					}
				}

				if(aAttrib === bAttrib) {
					return a['deckNum'] - b['deckNum'];
				} else if (aAttrib > bAttrib) {
					return 1;
				} else {
					return -1;
				}
			});

			return sortedDeck;
		};
	});
})();