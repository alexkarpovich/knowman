'use strict';

module.exports = ['$scope', '$state', '$http', 'userData', 'Restangular',
    function($scope, $state, $http, userData, Restangular) {

        var Account = Restangular.one('account');
        Account.get().then(function(data){
            $scope.account_list = data.results;
        });
    }
];
