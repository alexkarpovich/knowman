'use strict';

var angular = require('angular');
require('./list/list');
require('./add/add');
require('./edit/edit');
require('./delete/delete');
angular
    .module('Admin.User', [
        'Admin.User.List',
        'Admin.User.Add',
        'Admin.User.Edit',
        'Admin.User.Delete'
    ])
    .config(require('./user-config'));
