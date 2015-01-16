'use strict';

module.exports = ['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('admin.user.add',{
                url: '/add',
                template: require('./add-template.html'),
                controller: 'AddController'
            });
    }
];