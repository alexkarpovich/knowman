'use strict';

module.exports = ['$scope', '$state', '$stateParams', 'Restangular',
    function($scope, $state, $stateParams, Restangular) {
        $scope.data = {
            name: ''
        };

        $scope.add_group = function() {
            var Group = Restangular.all('account/group/');
            Group.post($scope.data).then(function(){
                $state.go('admin.group.list');
            });
        }
    }
];