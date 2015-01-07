'use strict';

module.exports = ['$scope', '$state', '$http', 'userData',
	function ($scope, $state, $http, userData) {
		$scope.currentUser = userData.getCurrentUser();
	}
];