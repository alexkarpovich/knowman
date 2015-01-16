'use strict';

var angular = require('angular');

angular
    .module('Admin.User.Edit', [])
    .config(require('./edit-config'))
    .controller('EditController', require('./edit-controller'));
