'use strict';

describe('filters', function() {
	var $filter;

	beforeEach(module('app'));

	beforeEach(inject(function(_$filter_) {
		$filter = _$filter_;
	}));

	//further testing for this is handled in controllers.js…
	it('has shuffle filter', function() {
		expect($filter('shuffleCards')).not.toBeNull();
	});

	//further testing for this is handled in controllers.js…
	it('has sort deck filter', function() {
		expect($filter('sortCards')).not.toBeNull();
	});
});