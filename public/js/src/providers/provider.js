'use strict';

var angular = require('angular');
require('./user/user');

angular
	.module('Provider',[
		'UserData'
	]);