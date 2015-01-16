'use strict';

module.exports = ['$scope','$state', '$stateParams', '$http',
    function($scope, $state, $stateParams, $http) {
        console.log('id '+ $stateParams.id);
    }
];
