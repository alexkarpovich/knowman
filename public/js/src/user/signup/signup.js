'use strict';

var angular = require('angular');

angular
	.module('Signup', [])
	.config(require('./signup-config'))
	.controller('SignupController', require('./signup-controller'));
