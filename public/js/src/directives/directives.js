'use strict';

var angular = require('angular');

require('./grid/grid');

angular
    .module('Directives',[
        'Directive.Grid'
    ]);
