'use strict';

module.exports = ['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('admin.group.delete',{
                url:'/delete/{pk:[0-9]{1,8}}',
                controller:'Admin.Group.DeleteController'
            });
    }
];
