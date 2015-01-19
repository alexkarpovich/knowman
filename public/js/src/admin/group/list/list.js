'use strict';

var angular = require('angular');

angular
    .module('Admin.Group.List', [])
    .config(require('./list-config'))
    .controller('Admin.Group.ListController', require('./list-controller'));
