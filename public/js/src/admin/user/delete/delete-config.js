'use strict';

module.exports = ['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('admin.user.delete',{
                url:'/delete/{id:[0-9]{1,8}}',
                controller:'DeleteController'
            });
    }
];
