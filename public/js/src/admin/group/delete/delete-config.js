'use strict';

module.exports = ['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('admin.group.delete',{
                url:'/delete/{id:[0-9]{1,8}}',
                controller:'Admin.Group.DeleteController'
            });
    }
];
