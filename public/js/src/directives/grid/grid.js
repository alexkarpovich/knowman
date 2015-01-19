'use strict';

var angular = require('angular');

angular
    .module('Directive.Grid', [])
    .controller('Directive.Grid.Controller', require('./grid-controller'))
    .directive('grid',require('./grid-directive'));
