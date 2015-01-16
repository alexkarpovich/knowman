'use strict';

module.exports = ['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('admin',{
                url: '/admin',
                template: '<ui-view></ui-view>'
            });
    }
];