'use strict';

var angular = require('angular');

angular
	.module('Login', [])
	.config(require('./login-config'))
	.controller('LoginController', require('./login-controller'));