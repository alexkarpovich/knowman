'use strict';

var angular = require('angular');

angular.module('Admin.User.List', [])
    .config(require('./list-config'))
    .controller('ListController', require('./list-controller'));
