'use strict';

var angular = require('angular');

angular
    .module('Admin.User.Delete', [])
    .config(require('./delete-config'))
    .controller('Admin.User.DeleteController', ['$state', '$stateParams','Restangular',
        function($state, $stateParams, Restangular) {
            var Account = Restangular.one('account/'+$stateParams.pk);
            Account.remove().then(function(){
                $state.go('admin.user.list');
            });
        }
    ]);