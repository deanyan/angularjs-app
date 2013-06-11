'use strict';

/* Controllers */

function OrderListCtrl($scope, $http) {
	var source = [];
	
	$http.get('orders/orders.json').success(function(data) {
		$scope.orders = data;
		source = data;

		
	});
	
	$scope.filter = function(){
			
		$scope.$watch('form.orderStatus.$modelValue', function(newValue, oldValue) {
			for(var i = $scope.orders.length - 1; i--; ) {
			
				if($scope.orders[i].status !== newValue){
					$scope.orders.splice(i, 1);
				
				}
			}
		});

	};
};
