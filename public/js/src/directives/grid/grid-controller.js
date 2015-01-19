'use strict';

module.exports = ['$scope', '$state', '$stateParams', 'Restangular',
    function($scope, $state, $stateParams, Restangular) {
        $scope.data = null;
        $scope.count_vals = [5,7,10,15,20,30,40,50];
        $scope.params = {
            page: $stateParams.page?$stateParams.page:1,
            sort_by: $stateParams.sort_by?$stateParams.sort_by:'id',
            count: $stateParams.count?$stateParams.count:7
        }

        var Object = Restangular.one($scope.url);
        Object.get({
            page:$scope.params.page,
            sort_by: $scope.params.sort_by,
            count: $scope.params.count
        }).then(function(data){
            $scope.data = data;
        });

        $scope.go = function() {
            $state.go($scope.uiRef+'.list',{
                page:$scope.params.page,
                sort_by: $scope.params.sort_by,
                count: $scope.params.count
            })
        }

        $scope.next_page = function() {
            if ($scope.data.next) {
                $scope.params.page = parseInt($scope.params.page)+1;
                $scope.go();
            }
        }

        $scope.prev_page = function() {
            if ($scope.data.previous) {
                $scope.params.page = parseInt($scope.params.page)-1;
                $scope.go();
            }
        }
    }
];