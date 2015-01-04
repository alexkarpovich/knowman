'use strict';

var angular = require('angular');

require('./left-menu/left-menu');
require('./right-menu/right-menu');

angular.module('Menu', [
		'LeftMenu',
		'RightMenu'
	]);
