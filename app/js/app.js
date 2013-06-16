'use strict';


// Declare app level module which depends on filters, and services
angular.module('orders-manage', ['$strap.directives']).
	config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/filter-by-click', {templateUrl: 'partials/filter-orders.html', controller: OrderListCtrl}).
		when('/filter-by-change', {templateUrl: 'partials/filter-orders2.html', controller: OrderListCtrl}).
		otherwise({redirectTo: '/filter-by-click'});
	}]);