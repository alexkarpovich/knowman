'use strict';

var angular = require('angular');
require('./user/user');

angular
    .module('Admin', [
        'Admin.User'
    ])
    .config(require('./admin-config'));
