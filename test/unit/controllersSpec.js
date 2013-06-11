'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));


  it('should ....', inject(function() {
    //spec body
  }));

  it('should ....', inject(function() {
    //spec body
  }));
  

});

describe('angularjs-app controllers', function(){
	describe('OrderListCtrl', function(){
		it('should create "orders" module with 7 orders', function() {
			var scope = {},
			    ctrl = OrderListCtrl(scope);
			expect(scope.orders.length).toBe(7);
		});
	});
});
