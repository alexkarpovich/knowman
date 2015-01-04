'use strict';

module.exports = [
	function () {
		return {
			restrict: 'E',
			replace: true,
			template: require('./left-menu-template.html'),
			controller: require('./left-menu-controller'),
			scope: {}
		};
	}
];