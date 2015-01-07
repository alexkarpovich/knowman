'use strict';

var angular = require('angular');

angular	
	.module('UserData', [])
	.provider('userData', require('./user-provider'));