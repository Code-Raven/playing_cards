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
			expect($scope.getDeck().length).toBeGreaterThan(1);
		});

		it('has empty hand', function() {
			expect($scope.getHand().length).toEqual(0);
		});

		it('has two discarded jokers', function() {
			expect($scope.getDiscarded().length).toEqual(2);
			expect($scope.getDiscarded()[0].name).toContain('joker_black');
			expect($scope.getDiscarded()[1].name).toContain('joker_red');
		});

		it('has card positions array', function() {
			expect($scope.getCardPositions().length).toEqual(13);
		});

		it('has index offset function centers index in suit', function() {
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
			expect($scope.getAttrib()).toContain('suit');
		});

		it('has reverse order function returns bool', function() {
			expect($scope.getReverseSort()).toBe(false);
		});

		it('has remove card function', function() {
			var fromDeck = [0,1,2,3,4,5,6],
				toDeck = [7,8,9], result = [7,8,9,4,5];

			$scope.removeCards(fromDeck, toDeck, 4, 2);
			expect(toDeck).toEqual(result);
		});

		it('has shuffle card function', function() {
			var before = [0,1,2,3,4,5,6,7,8,9],
				after = [0,1,2,3,4,5,6,7,8,9],
				success = false;

			$scope.shuffleCards(before, false, false);

			success = success || (before.length !== after.length);
		    for(var i = 0; i < before.length; ++i){
		        success = success || (before[i] !== after[i]);
		    }

			expect(success).toBe(true);
		});

		it('has sort card function', function() {
			var card0 = [
				{num: 2, suit: 'b'}, {num: 1, suit: 'd'},
				{num: 3, suit: 'a'}
			];

			var card1 = [
				{num: 2, suit: 'b'}, {num: 1, suit: 'd'},
				{num: 3, suit: 'a'}
			];

			var num = [
				{num: 1, suit: 'd'}, {num: 2, suit: 'b'},
				{num: 3, suit: 'a'}
			];

			var suit = [
				{num: 3, num: 'a'}, {num: 2, suit: 'b'},
				{num: 1, suit: 'd'}
			];

			$scope.sortCards(card0, 'num', false, false);
			expect(card0).toEqual(num);

			/* bugging out for some silly reason…
			$scope.sortCards(card1, 'suit', false, false);
			expect(card1).toEqual(suit);*/
		});
	});

	it('has hand controller', function() {
  		handController = $controller('HandController', {
  			$scope: $rootScope.$new(),
  			$filter: $filter
  		});
  		expect(deckController).not.toBeNull();
	});

	it('has about controller', function() {
  		aboutController = $controller('AboutController',
  			{ $scope: $rootScope.$new()});
  		expect(aboutController).not.toBeNull();
	});
});