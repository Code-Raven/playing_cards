// describe("true", function() {
// 	if("Should be true", function() {
// 		expect(true).toBeTruthy();
// 	});
// });

// var $rootScope, $scope;

// beforeEach(function() {
// 	module('deck');

// 	inject(function($injector) {
// 		$rootScope = $injector.get('$rootScope');
// 		$scope = $rootScope.$new();
// 	});
// });
// 

describe('application', function() {
	beforeEach(function(){
        module('deck');
	    module(function ($provide) {
	        $provide.value('playing-cards', serviceMock);
	        $provide.value('ngRoute', serviceMock);
	    });
	});

	it('has a shuffle filter', inject(function($filter) {
        expect($filter('shuffleDeck')).not.toBeNull();
    }));

	// describe('has a shuffle filter', function(){

	// 	var shuffleDeck;
	// 	var deck = [
	// 		{ name: 'clubs_ace', hidden: false, deckNum: 1, suitNum: 1, suit: 'clubs'},
	// 		{ name: 'clubs_2', hidden: false, deckNum: 2, suitNum: 2, suit: 'clubs'},
	// 		{ name: 'clubs_3', hidden: false, deckNum: 3, suitNum: 3, suit: 'clubs'},
	// 		{ name: 'clubs_4', hidden: false, deckNum: 4, suitNum: 4, suit: 'clubs'}
	// 	];

	// 	beforeEach(inject(function($filter) {
	// 		shuffleDeck = $filter("shuffleDeck",());
	// 		//shuffleDeck = $filter("shuffleDeck")($rootScope.deck, false);
	// 	}));

	// 	it("has a shuffle deck filter", function() {
	// 		expect(shuffleDeck(deck, false)).toBe(deck);
	// 	});

	// });
});