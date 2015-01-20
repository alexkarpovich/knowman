'use strict';

var angular = require('angular'),
	domready = require('domready');

require('./providers/provider');
require('./menu/menu');
require('./user/user');
require('./admin/admin');
require('./directives/directives');
require('./filters/filters');

domready(function(){
	angular.module('App', [
		'ui.router',
		'ui.bootstrap',
		'restangular',
		'ngCookies',
		'Provider',
		'Directives',
		'Filters',
		'Menu',
		'User',
		'Admin'
	])
	.config(['$stateProvider', '$httpProvider', '$cookiesProvider', 'userDataProvider',
		function ($stateProvider, $httpProvider, $cookies, userDataProvider) {
	        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
			$httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
			userDataProvider.userData(window.knowman);
			$stateProvider
				.state('home', {
					url: '/home',
					template: require('./home/home.html')
				});
		}
	])
	.run(['$http','$cookies', 'userData',
	    function($http, $cookies, userData) {
			$http.defaults.headers.common['X-CSRFToken'] = userData.getCsrf();
	    }
   	]);

	angular.bootstrap(document, ['App']);
});

