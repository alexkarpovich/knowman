'use strict';

var angular = require('angular');

angular
	.module('Logout', [])
	.config(require('./logout-config'))
	.controller('LogoutController', require('./logout-controller'));