'use strict';

module.exports = [
	function () {
		return {
			restrict: 'E',
			replace: true,
			template: require('./menu-template.html'),
			controller: require('./menu-controller'),
			scope: {}
		};
	}
];