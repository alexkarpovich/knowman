'use strict';

module.exports = ['$scope','$state', '$stateParams', 'Restangular',
    function($scope, $state, $stateParams, $http, userData, Restangular) {
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
        var Account = Restangular.one('account/'+$stateParams.id);
        Account.get().then(function(data){
            $scope.data = data;
        });
        $scope.edit_user = function() {
            $scope.data
                .put()
                .then(function(){
                    $state.go('admin.user.list');
                });
        }
    }
];
