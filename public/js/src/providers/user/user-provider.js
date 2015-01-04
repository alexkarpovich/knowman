'use strict';

module.exports = function() {
	var userData = {};

	this.userData = function(value) {
		userData = value;
	};

	this.$get = function() {
		return {
			getCurrentUser: function() {
				return userData.currentUser;
			},
			setCurrentUser: function(currentUser) {
				userData.currentUser = currentUser;
			},
			getCsrf: function() {
				return userData.csrftoken;
			},
			setCsrf: function(csrf) {
				userData.csrftoken = csrf;
			}
		};
	};
};