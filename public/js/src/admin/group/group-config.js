'use strict';

module.exports = ['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('admin.group',{
                url: '/group',
                template: '<ui-view></ui-view>'
            });
    }
];