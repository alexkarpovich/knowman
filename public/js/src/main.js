'use strict';

var angular = require('angular'),
	domready = require('domready');

require('./providers/provider');
require('./menu/menu');
require('./user/user');

domready(function(){
	angular.module('App', [
		'ui.router',
		'ui.bootstrap',
		'ngCookies',
		'Provider',
		'Menu',
		'User'
	])
	.config(['$stateProvider', '$httpProvider', '$cookiesProvider', 'userDataProvider',
		function ($stateProvider, $httpProvider, $cookies, userDataProvider) {	
			$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';					
			userDataProvider.userData(window.knowman);
			$stateProvider
				.state('home', {
					url: '/home',
					template: require('./home/home.html')
				});
		}
	])
	.run(['$http','$cookies',
	    function($http, $cookies) {
	        $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;	        
	    }
   	]);;

	angular.bootstrap(document, ['App'])	
});

