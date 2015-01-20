'use strict';

var angular = require('angular');

angular
    .module('Admin.Group.Delete', [])
    .config(require('./delete-config'))
    .controller('Admin.Group.DeleteController', ['$state', '$stateParams','Restangular',
        function($state, $stateParams, Restangular) {
            var Group = Restangular.one('account/group/'+$stateParams.pk);
            Group.remove().then(function(){
                $state.go('admin.group.list');
            });
        }
    ]);