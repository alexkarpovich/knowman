'use strict';

module.exports = [
	function () {
		return {
			restrict: 'E',
			replace: true,
			template: require('./right-menu-template.html'),
			controller: require('./right-menu-controller'),
			scope: {}
		};
	}
];