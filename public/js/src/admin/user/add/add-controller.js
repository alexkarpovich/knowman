'use strict';

module.exports = ['$scope', '$state', '$http',
    function($scope, $state, $http) {
        $scope.data = {
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            password1: '',
            password2: ''
        };
        $scope.add_user = function() {
            $http({
                url:'/account/add/',
                method: 'POST',
                data: $scope.data
            }).success(function(data){
                $state.go('admin.user.list')
            }).error(function(data) {

            });
        }
    }
];