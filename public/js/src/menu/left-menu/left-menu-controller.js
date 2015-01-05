'use strict';

module.exports = ['$scope', '$state',
	function ($scope, $state) {
		$scope.isSubmenuShowd = false;
		
		$scope.showSubmenu = function() {
			$scope.isSubmenuShowd = $scope.isSubmenuShowd?false:true;			
		};	
	}
];