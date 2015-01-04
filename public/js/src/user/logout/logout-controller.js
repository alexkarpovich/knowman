'use strict';

module.exports = ['$state', '$http','userData',
	function($state, $http, userData) {
		$http({
			url: '/join/logout/',
			method: 'post',
			data:{}
		}).success(function(data){
			userData.setCurrentUser({});			
			$state.go('home');
		}).error(function(){});
	}
];