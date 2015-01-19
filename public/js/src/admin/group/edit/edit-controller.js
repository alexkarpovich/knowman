'use strict';

module.exports = ['$scope','$state', '$stateParams','Restangular',
    function($scope, $state, $stateParams, Restangular) {
        $scope.data = {
            name: ''
        };
        var Group = Restangular.one('account/group/'+$stateParams.id);
        Group.get().then(function(data){
            $scope.data = data;
        });
        $scope.edit_group = function() {
            $scope.data
                .put()
                .then(function(){
                    $state.go('admin.group.list');
                });
        }
    }
];
