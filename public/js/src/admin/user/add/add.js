'use strict';

var angular = require('angular');

angular
    .module('Admin.User.Add', [])
    .config(require('./add-config'))
    .controller('Admin.User.AddController', require('./add-controller'));
