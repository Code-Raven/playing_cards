'use strict';

xdescribe("directives", function () {
	var $rootScope, $scope, $compile;

	beforeEach(module('app'));

	beforeEach(inject(function(_$rootScope_, _$compile_) {
		$rootScope = _$rootScope_;
		$compile = _$compile_;
	    $scope = $rootScope.$new();

	    var element = angular.element("<test></test>");
	    var template = $compile(element)($scope);

	    $scope.$digest();

	    var controller = element.controller;
	}));

	xit("should toggle open when toggle() is called", inject(function() {
	    $scope.open = false;
	    $scope.toggle();
	    expect($scope.open).toBeTruthy();
	    $scope.toggle();
	    expect($scope.open).toBeFalsy();
	}));

	// beforeEach(inject(function(_$rootScope_, _$compile_) {
	// 	$rootScope = _$rootScope_;
	// 	$compile = _$compile_;
	//     $scope = $rootScope.$new();

	//     var element = angular.element("<test></test>");
	//     template = $compile(element)($scope);
	//     $scope.$digest();
	    
	//     controller = element.controller;
	// }));

	// it("should toogle open when toggle() is called", inject(function() {
	//     $scope.open = false;
	//     $scope.toggle();
	//     expect($scope.open).toBeTruthy();
	//     $scope.toggle();
	//     expect($scope.open).toBeFalsy();
	// }));

});