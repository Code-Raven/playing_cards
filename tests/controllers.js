'use strict';

describe('controllers', function() {
	var $rootScope, $filter, $controller,
		appController, deckController,
		handController, aboutController;

	beforeEach(module('app'));

	beforeEach(inject(function(_$rootScope_, _$filter_, _$controller_) {
		$rootScope = _$rootScope_;
		$filter = _$filter_;
		$controller = _$controller_;
	}));

	describe('app controller', function() {
		var $scope;

		it('has app controller', function() {
	  		appController = $controller('AppController', {
	  			$scope: ($scope = $rootScope.$new()),
	  			$filter: $filter
	  		});
	  		expect(deckController).not.toBeNull();
		});

		it('has deck of cards', function() {
			expect($scope.getDeck).toBeDefined();
			expect($scope.getDeck().length).toBeGreaterThan(1);
		});

		it('has empty hand', function() {
			expect($scope.getHand).toBeDefined();
			expect($scope.getHand().length).toEqual(0);
		});

		it('has two discarded jokers', function() {
			expect($scope.getDiscarded).toBeDefined();
			expect($scope.getDiscarded().length).toEqual(2);
			expect($scope.getDiscarded()[0].name).toContain('joker_black');
			expect($scope.getDiscarded()[1].name).toContain('joker_red');
		});

		it('has card positions array', function() {
			expect($scope.getCardPositions).toBeDefined();
			expect($scope.getCardPositions().length).toEqual(13);
		});

		it('has index offset function centers index in suit', function() {
			expect($scope.getIndexOffset).toBeDefined();
			expect($scope.getIndexOffset(6, 12)).toEqual(6);
			expect($scope.getIndexOffset(5, 10)).toEqual(6);
			expect($scope.getIndexOffset(4, 8)).toEqual(6);
			expect($scope.getIndexOffset(3, 6)).toEqual(6);
			expect($scope.getIndexOffset(2, 4)).toEqual(6);
			expect($scope.getIndexOffset(1, 2)).toEqual(6);
			expect($scope.getIndexOffset(0, 1)).toEqual(6);
			expect($scope.getIndexOffset(99, 198)).toEqual(6);
		});

		it('has index offset function centers index in suit', function() {
			expect($scope.getCardPosition).toBeDefined();
			expect($scope.getCardPosition(0, 13)).toContain('50% - 300px - 50px');
			expect($scope.getCardPosition(6, 13)).toContain('50% + 0px - 50px');
			expect($scope.getCardPosition(12, 13)).toContain('50% + 300px - 50px');
		});
	});

	describe('deck controller', function() {
		var $scope;

		it('has deck controller', function() {
	  		deckController = $controller('DeckController', {
	  			$scope: ($scope = $rootScope.$new()),
	  			$filter: $filter
	  		});

	  		expect(deckController).not.toBeNull();
	  	});

	  	it('has get attrib function', function() {
	  		expect($scope.getAttrib).toBeDefined();
			expect($scope.getAttrib()).toContain('suit');
		});

		it('has reverse order function returns bool', function() {
			expect($scope.getReverseSort).toBeDefined();
			expect($scope.getReverseSort()).toBe(false);
		});

		it('has remove card function', function() {
			expect($scope.removeCards).toBeDefined();

			var fromDeck = [0,1,2,3,4,5,6],
				toDeck = [7,8,9], result = [7,8,9,4,5];

			$scope.removeCards(fromDeck, toDeck, 4, 2);
			expect(toDeck).toEqual(result);
		});

		it('has shuffle card function', function() {
			expect($scope.shuffleCards).toBeDefined();

			var before = [0,1,2,3,4,5,6,7,8,9],
				after = [0,1,2,3,4,5,6,7,8,9],
				success = false;

			$scope.shuffleCards(before, false, false);

			//Making sure array size didn't change…
			success = success || (before.length !== after.length);

			//Checking for any "shuffled" value…
		    for(var i = 0; i < before.length; ++i){
		        success = success || (before[i] !== after[i]);
		    }

			expect(success).toBe(true);
		});

		it('has sort card function', function() {
			expect($scope.sortCards).toBeDefined();

			var values = [], numTests = 6, n = 52;

			for(var i = 0; i < numTests; ++i) {
				values.push([]);
			}

			//[0] and [1] get reversed, all other [] have the same (b) values.
			for(var a = 0, b = n - 1; a < n; ++a, --b) {
				values[0].push({'a': a, 'b': "" + b});
				values[1].push({'a': b, 'b': "" + a});
				values[2].push({'a': a, 'b': "" + b});
				values[3].push({'a': a, 'b': "" + b});
				values[4].push({'a': a, 'b': "" + b});
				values[5].push({'a': a, 'b': "" + b});
			}

			//all other [] are compaired to [0] and [1] after
			//	being sorted and reversed…
			$scope.sortCards(values[2], 'a', false, false);
			expect(values[2]).toEqual(values[0]);

			$scope.sortCards(values[3], 'b', false, false);
			expect(values[3]).toEqual(values[1]);

			$scope.sortCards(values[4], 'a', false, true);
			expect(values[4]).toEqual(values[1]);

			$scope.sortCards(values[5], 'b', false, true);
			expect(values[5]).toEqual(values[0]);
		});
	});

	describe('hand controller', function() {
		var $scope;

		it('has hand controller', function() {
	  		handController = $controller('HandController', {
	  			$scope: ($scope = $rootScope.$new()),
	  			$filter: $filter
	  		});
	  		expect(deckController).not.toBeNull();
		});

		it('hides all cards on start-up', function(){
			expect($scope.getCardsHidden).toBeDefined();
			expect($scope.getCardsHidden()).toBe(true);
		});

		it('keeps track of how many cards are drawn', function(){
			expect($scope.getNumCardsDrawn).toBeDefined();
			expect($scope.getNumCardsDrawn()).toEqual(jasmine.any(Number));
		});

		it('keeps track of how many cards user has chosen to draw', function(){
			expect($scope.getNumCardsChosen).toBeDefined();
			expect($scope.getNumCardsChosen()).toEqual(jasmine.any(Number));
		});

		it('handles how many cards are chosen', function(){
			expect($scope.chooseNumCards).toBeDefined();

			var availCards = [1,2,3,4,5];
			$scope.chooseNumCards(availCards, 6);//<--
			//Shouldn't be able to choose more than 5!!
			expect($scope.getNumCardsChosen()).toEqual(5);
		});

		it('provides a way to hide cards', function(){
			expect($scope.hideCards).toBeDefined();

			var cards = [{hidden: false}];
			$scope.hideCards(cards, true);

			expect(cards[0].hidden).toBe(true);
		});

		it('removes cards from a deck/hand of cards', function(){
			expect($scope.removeCards).toBeDefined();

			var fromDeck = [0,1,2,3,4,5,6],
				toDeck = [7,8,9], result = [7,8,9,4,5];

			$scope.removeCards(fromDeck, toDeck, 4, 2);
			expect(toDeck).toEqual(result);
		});

		it('draws cards and updates number of cards drawn', function(){
			expect($scope.drawCards).toBeDefined()

			var deck = [1,2,3,4,5,6,7],
				hand = [];

			expect($scope.getNumCardsDrawn()).not.toEqual(
				$scope.getNumCardsChosen());

			$scope.drawCards(deck, hand);

			expect($scope.getNumCardsDrawn()).toEqual(
				$scope.getNumCardsChosen());
		});

		it('clears drawn cards and puts them back to the deck', function(){
			expect($scope.clearCards).toBeDefined();

			var deck = [1,2,3,4,5,6],
				hand = [1,2,3];

			$scope.clearCards(deck, hand);
			expect(hand.length).toEqual(0);
			expect(deck.length).toEqual(9);
			expect($scope.getNumCardsDrawn()).toEqual(0);
		});

		it('toogling and clearing cards', function(){
			expect($scope.drawClearCards).toBeDefined();

			var deck = [1,2,3,4,5,6,7,8,9],
				hand = [];

			$scope.drawClearCards(deck, hand);
			expect(hand.length).toEqual($scope.getNumCardsChosen());
		});
	});

	describe('about controller', function() {
		var $scope;

		it('has about controller', function() {
	  		aboutController = $controller('AboutController', { 
	  				$scope: ($scope = $rootScope.$new())
	  		});
	  		expect(aboutController).not.toBeNull();
		});

		it('has an author value', function(){
			expect($scope.author).toBeDefined();
			expect($scope.author).toContain('');
		});

		it('has an explanation value', function(){
			expect($scope.explain).toBeDefined();
			expect($scope.explain).toContain('');
		});
	});
});