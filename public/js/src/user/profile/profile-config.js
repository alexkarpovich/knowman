'use strict';

module.exports = ['$stateProvider',
	function ($stateProvider) {
		$stateProvider
			.state('user.profile',{
				url: '/profile',
				template: require('./profile-template.html'),
				controller: 'ProfileController'
			});
	}
];