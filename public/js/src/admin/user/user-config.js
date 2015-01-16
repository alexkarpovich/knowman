'use strict';

module.exports = ['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('admin.user',{
                url: '/user',
                template: '<ui-view></ui-view>'
            });
    }
];
