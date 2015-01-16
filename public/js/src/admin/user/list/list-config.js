'use strict';

module.exports = ['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('admin.user.list',{
                url: '/list',
                template: require('./list-template.html'),
                controller: 'ListController'
            });
    }
];
