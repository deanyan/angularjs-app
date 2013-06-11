'use strict';

/* Controllers */

function OrderListCtrl($scope, $http) {
	var source = [];
	
	$http.get('orders/orders.json').success(function(data) {
		$scope.orders = data;
		source = data;		
	});
	
	$scope.filter = function(){
		
		var orders = source;
		
		var orderStatus = $scope.form.orderStatus.$modelValue,
				shipDate = $scope.form.shipDate.$modelValue,
				shipTime = $scope.form.shipTime.$modelValue,
				itemType = $scope.form.itemType.$modelValue,
				sioc = $scope.form.sioc.$modelValue,
				fastTrack = $scope.form.fastTrack.$modelValue;
		
		if( $scope.form.$pristine) {
			$scope.orders = source;
			return;
		}
		console.log(source);
		
		for(var i = orders.length - 1; i--; ) {
			
			if(!!orderStatus && orders[i].status !== orderStatus){
				orders.splice(i, 1);
			
			}
		}
		console.log($scope.form);
		
		$scope.orders = orders;
	};
};
