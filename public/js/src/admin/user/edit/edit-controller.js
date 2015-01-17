'use strict';

module.exports = ['$scope','$state', '$stateParams', '$http', 'userData', 'Restangular',
    function($scope, $state, $stateParams, $http, userData, Restangular) {
        $scope.data = {
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            password1: '',
            password2: ''
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
