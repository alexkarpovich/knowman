'use strict';

module.exports = ['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('admin.user.list',{
                url: '/list?page&sort_by',
                template: require('./list-template.html'),
                controller: 'ListController'
            });
    }
];
