'use strict';

module.exports = ['$scope','$state', '$stateParams', '$http',
    function($scope, $state, $stateParams, $http) {
        $scope.data = {
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            password1: '',
            password2: ''
        };
        $http({
            url: '/account/edit/'+$stateParams.id+'/',
            method: 'GET',
            data: $scope.data
        }).success(function(data){
            console.log(data);
            $scope.data = data;
        }).error(function(data){

        });
    }
];
