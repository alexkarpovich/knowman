'use strict';

module.exports = ['$scope', '$state','Restangular',
    function($scope, $state, Restangular) {
        $scope.data = {
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            password1: '',
            password2: '',
            is_staff: false,
            is_superuser: false
        };

        $scope.add_user = function() {
            var Account = Restangular.all('account/');
            Account.post($scope.data).then(function(){
                $state.go('admin.user.list');
            });
        }
    }
];
