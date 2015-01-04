'use strict';

var angular = require('angular');

require('./signup/signup');
require('./login/login');
require('./profile/profile');
require('./logout/logout');

angular
	.module('User', [
		'Signup',
		'Login',
		'Profile',
		'Logout'
	])
	.config(require('./user-config'));