'use strict';

module.exports = ['$state', '$http','userData',
	function($state, $http, userData) {
		$http({
			url: '/join/logout/',
			method: 'post',
			data:{}
		}).success(function(data){
			$state.go('home');
		}).error(function(){});
	}
];