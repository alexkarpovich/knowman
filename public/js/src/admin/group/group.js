'use strict';

var angular = require('angular');

require('./list/list');
require('./add/add');
require('./edit/edit');
require('./delete/delete');

angular
    .module('Admin.Group',[
        'Admin.Group.List',
        'Admin.Group.Add',
        'Admin.Group.Edit',
        'Admin.Group.Delete'
    ])
    .config(require('./group-config'));
