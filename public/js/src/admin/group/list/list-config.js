'use strcit';

module.exports = ['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('admin.group.list', {
                url:'/list',
                template: require('./list-template.html'),
                controller: 'Admin.Group.ListController'
            });
    }
];
