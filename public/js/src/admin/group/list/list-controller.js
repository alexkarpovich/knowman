'use strict';

module.exports = ['$scope', '$state', 'Restangular', '$stateParams',
    function($scope, $state, Restangular, $stateParams) {
        $scope.data = null;
        $scope.options = {
            page: $stateParams.page?$stateParams.page:1,
            sort_by: $stateParams.sort_by?$stateParams.sort_by:'id'
        }
        var Group = Restangular.one('account/group');
        Group.get({
            page:$scope.options.page,
            sort_by: $scope.options.sort_by
        }).then(function(data){
            $scope.data = data;
        });

        $scope.go = function() {
            $state.go('admin.group.list',{
                page:$scope.options.page,
                sort_by: $scope.options.sort_by
            })
        }

        $scope.next_page = function() {
            if ($scope.data.next) {
                $scope.options.page = parseInt($scope.options.page)+1;
                $scope.go();
            }
        }

        $scope.prev_page = function() {
            if ($scope.data.previous) {
                $scope.options.page = parseInt($scope.options.page)-1;
                $scope.go();
            }
        }
    }
];