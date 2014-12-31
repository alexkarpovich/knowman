'use strict';

var angular = require('angular'),
	domready = require('domready');

require('./menu/menu');

domready(function(){
	angular.module('App', [
		'ui.router',
		'ui.bootstrap',
		'Menu'
	])
	.config(['$stateProvider', 
		function ($stateProvider) {
			$stateProvider
				.state('home', {
					url: '/{home}',
					template: require('./home/home.html')
				});
		}
	]);

	angular.bootstrap(document, ['App'])	
});

