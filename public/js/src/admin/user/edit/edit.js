'use strict';

var angular = require('angular');

angular
    .module('Admin.User.Edit', [])
    .config(require('./edit-config'))
    .controller('Admin.User.EditController', require('./edit-controller'));
