'use strict';

module.exports = ['$scope', '$state','$http', '$cookies',
	function($scope, $state, $http, $cookies) {
		$scope.signupData = {
			username: '',
			email: '',
			password1: '',
			password2: ''
		};

		$scope.csrftoken = $cookies.csrftoken;

		$scope.signup = function() {
			$http({
				url: '/join/signup/',
				method: 'POST',
				data: $scope.signupData
			}).success(function(data) {
				$state.go('home');
			}).error(function(data){

			});
		};
	}
];
