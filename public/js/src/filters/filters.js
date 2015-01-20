'use strict';

var angular = require('angular');

angular
    .module('Filters', [])
    .filter('keys', function() {
		return function(input) {
		    if (!input) {
			    return [];
		    }
		    return Object.keys(input);
        }
    })
	.filter('values', function() {
		return function(input) {
			var result = [];
			var keys = Object.keys(input);
			keys.forEach(function(key){
				result.push(input[key]);
			});
			return result;
		}
	});
