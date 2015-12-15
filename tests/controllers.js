'use strict';

describe('controllers', function() {
	var $rootScope, $filter, $controller,
		deckController, aboutController;

	beforeEach(module('app'));

	beforeEach(inject(function(_$rootScope_, _$filter_, _$controller_) {
		$rootScope = _$rootScope_;
		$filter = _$filter_;
		$controller = _$controller_;
	}));

	it('has deck controller', function() {
  		deckController = $controller('DeckController', {
  			$rootScope: $rootScope,
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