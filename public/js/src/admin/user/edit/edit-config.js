'use strict';

module.exports = ['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('admin.user.edit', {
                url: '/edit/{pk:[0-9]{1,8}}',
                template: require('./edit-template.html'),
                controller: 'Admin.User.EditController'
            });
    }
];
