'use strict';

var angular = require('angular');

angular.module('Menu', [])
	.directive('sideMenu', require('./menu-directive'));
