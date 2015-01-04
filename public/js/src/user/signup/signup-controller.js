'use strict';

module.exports = ['$scope', '$state','$http', '$cookies', 'userData', 
	function($scope, $state, $http, $cookies, userData) {
		$scope.signupData = {
			email: '',
			username: '',
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
				userData.setCurrentUser(data.user)
				$state.go('home');
			}).error(function(data){
				console.log(data);
			});
		};
	}
];
