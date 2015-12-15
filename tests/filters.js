'use strict';

describe('filters', function() {
	var $filter;

	beforeEach(module('app'));

	beforeEach(inject(function(_$filter_) {
		$filter = _$filter_;
	}));

	it('has shuffle filter', function() {
		expect($filter('shuffleDeck')).not.toBeNull();
	});

	it('has sort deck filter', function() {
		expect($filter('sortDeck')).not.toBeNull();
	});
});