'use strict';

module.exports = ['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('admin.user.edit', {
                url: '/edit/{id:[0-9]{1,8}}',
                template: require('./edit-template.html'),
                controller: 'EditController'
            });
    }
];
