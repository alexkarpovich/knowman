'use strict';

var angular = require('angular');

require('./signup/signup');
require('./login/login');
require('./profile/profile');

angular
	.module('User', [
		'Signup',
		'Login',
		'Profile'
	])
	.config(require('./user-config'));