'use strict';

module.exports = ['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('admin.group.add',{
                url: '/add',
                template: require('./add-template.html'),
                controller: 'Admin.Group.AddController'
            });
    }
];
