'use strict';

var angular = require('angular');

require('./list/list');

angular
    .module('Admin.Group',[
        'Admin.Group.List'
    ])
    .config(require('./group-config'));
