'use strict';

module.exports = ['$stateProvider',
	function($stateProvider) {
		$stateProvider
			.state('user.logout',{
				url: '/logout',
				template: '<ui-view></ui-view>',
				controller: 'LogoutController'
			});
	}
];