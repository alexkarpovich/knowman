'use strcit';

module.exports = ['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('admin.group.list', {
                url:'/list?page&sort_by&count',
                template: require('./list-template.html')
            });
    }
];
