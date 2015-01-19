'use strict';

var angular = require('angular');

angular
    .module('Admin.Group.Edit', [])
    .config(require('./edit-config'))
    .controller('Admin.Group.EditController', require('./edit-controller'));
