'use strict';

describe('filters', function() {
	var $filter;

	beforeEach(module('app'));

	beforeEach(inject(function(_$filter_) {
		$filter = _$filter_;
	}));

	it('has shuffle filter', function() {
		expect($filter('shuffleCards')).not.toBeNull();
	});

	it('has sort deck filter', function() {
		expect($filter('sortCards')).not.toBeNull();
	});
});