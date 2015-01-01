'use strict';

module.exports = ['$stateProvider',
	function($stateProvider) {
		$stateProvider
			.state('user.signup',{
				url: '/signup',
				template: require('./signup-template.html'),
				controller: 'SignupController'
			});
	}
];
