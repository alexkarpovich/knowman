'use strict';

module.exports = ['$scope', '$state', '$http','Restangular',
    function($scope, $state, $http, Restangular) {
        $scope.data = {
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            password1: '',
            password2: ''
        };

        $scope.add_user = function() {
            var Account = Restangular.all('account/');
            Account.post($scope.data).then(function(){
                $state.go('admin.user.list');
            });
        }
    }
];