'use strict';

var angular = require('angular');

angular
	.module('LeftMenu', [])
	.directive('leftMenu', require('./left-menu-directive'));