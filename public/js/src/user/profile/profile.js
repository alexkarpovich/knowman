'use strict';

var angular = require('angular');

angular
	.module('Profile', [])
	.config(require('./profile-config'))
	.controller('ProfileController', require('./profile-controller'));