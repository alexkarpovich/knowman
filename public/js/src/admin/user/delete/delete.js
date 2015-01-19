'use strict';

var angular = require('angular');

angular
    .module('Admin.User.Delete', [])
    .config(require('./delete-config'))
    .controller('Admin.User.DeleteController', ['$http', '$state', '$stateParams','userData','Restangular',
        function($http, $state, $stateParams, userData, Restangular) {
            var Account = Restangular.one('account/'+$stateParams.id);
            Account.remove().then(function(){
                $state.go('admin.user.list');
            });
        }
    ]);