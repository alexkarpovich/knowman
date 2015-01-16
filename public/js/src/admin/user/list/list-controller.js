'use strict';

module.exports = ['$scope', '$state', '$http', 'userData',
    function($scope, $state, $http, userData) {
        $http({
            url: '/account/list/',
            method: 'GET'
        }).success(function(data) {
            console.log('Account list '+data['object_list']);
            $scope.account_list = data['object_list'];
        }).error(function(data) {
            console.log('Admin.User.List Error');
        });
    }
];
