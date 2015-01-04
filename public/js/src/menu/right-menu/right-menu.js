'use strict';

var angular = require('angular');

angular
	.module('RightMenu', [])
	.directive('rightMenu', require('./right-menu-directive'));