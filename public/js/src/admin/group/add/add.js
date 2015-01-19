'use strict';

var angular = require('angular');

angular
    .module('Admin.Group.Add', [])
    .config(require('./add-config'))
    .controller('Admin.Group.AddController', require('./add-controller'));
