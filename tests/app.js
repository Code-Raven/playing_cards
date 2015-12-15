'use strict';

describe('app', function() {
	var $rootScope, $scope = {},
		$filter, $controller;

	beforeEach(module('app'));


});

/* boilerplate…
	describe('app', function() {

	});

	beforeEach(function() {
		module('app')
	});

	it('has a shuffle filter', inject(function($filter) {
		expect($filter('shuffleDeck')).not.toBeNull();
	}));
 */

/* TODO: Keep this around for reference…
//spec suit (groups tests together)
describe("nothing ", function() {
	//spec (individual tests)
	it("should test nothing", function() {
		//assertion that can be either true or false
		//"expect" chained with matcher function
		//can chain "not" after "expect" and before matcher
		expect(true).toBeTruthy();
	});

	//appending "x" disables specs and suits"
	xit("should exclude this", function() {
		expect(true).toBeTruthy();
	});
});*/



// describe('sorting the list of users', function() {
//   it('should sort in descending order by default', function() {
//     var users = ['jack', 'igor', 'jeff'];
//     var sorted = sortUsers(users);
//     expect(sorted).toEqual(['jeff', 'jack', 'igor']);
//   });
//   
// var $rootScope, $scope;

// beforeEach(function() {
// 	module('deck');

// 	inject(function($injector) {
// 		$rootScope = $injector.get('$rootScope');
// 		$scope = $rootScope.$new();
// 	});
// });
// 

// describe('application', function() {
// 	beforeEach(function(){
//         module('deck');
// 	    module(function ($provide) {
// 	        $provide.value('playing-cards', serviceMock);
// 	        $provide.value('ngRoute', serviceMock);
// 	    });
// 	});

// 	it('has a shuffle filter', inject(function($filter) {
//         expect($filter('shuffleDeck')).not.toBeNull();
//     }));

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
//});