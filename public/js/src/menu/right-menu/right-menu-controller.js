'use strict';

module.exports = ['$scope', '$state', 'userData',
	function ($scope, $state, userData) {
		$scope.isSubmenuShowd = false;

		$scope.currentUser = userData.getCurrentUser();
		
		$scope.showSubmenu = function() {
			$scope.currentUser = userData.getCurrentUser();
			$scope.isSubmenuShowd = $scope.isSubmenuShowd?false:true;			
		};	
	}
];