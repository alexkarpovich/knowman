'use strict';

var angular = require('angular'),
	domready = require('domready');

domready(function(){
	angular.module('App', []);

	angular.bootstrap(document, ['App'])	
});

