'use strict';

var angular = require('angular');
require('./list/list');
require('./add/add');
require('./edit/edit');
angular
    .module('Admin.User', [
        'Admin.User.List',
        'Admin.User.Add',
        'Admin.User.Edit'
    ])
    .config(require('./user-config'));
