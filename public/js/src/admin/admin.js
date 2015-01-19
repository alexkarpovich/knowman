'use strict';

var angular = require('angular');
require('./user/user');
require('./group/group');

angular
    .module('Admin', [
        'Admin.User',
        'Admin.Group'
    ])
    .config(require('./admin-config'));
