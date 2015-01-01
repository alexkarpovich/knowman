'use strict';

module.exports = ['$scope', '$state', '$http', 'userData',
	function ($scope, $state, $http, userData) {
		$scope.loginData = {
			username: '',
			password: ''
		};

		$scope.login = function() {
			$http({
				url:'/join/login/',
				method: 'POST',
				data: $scope.loginData
			}).success(function(data){
				userData.setCurrentUser(data.user);
				$state.go('home');
			}).error(function(data){

			});
		};
	}
];