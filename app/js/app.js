'use strict';


// Declare app level module which depends on filters, and services
angular.module('orders-manage', []).
	config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/orders', {templateUrl: 'partials/order-list.html', controller: OrderListCtrl}).
		otherwise({redirectTo: '/orders'});
	}]);