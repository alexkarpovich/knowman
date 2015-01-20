'use strict';

module.exports = ['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('admin.group.edit', {
                url: '/edit/{pk:[0-9]{1,8}}',
                template: require('./edit-template.html'),
                controller: 'Admin.Group.EditController'
            });
    }
];
