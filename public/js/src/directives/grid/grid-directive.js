'use strict';

module.exports = [
    function() {
        return {
            restrict: 'E',
            scope: {
                url:'@',
                uiRef:'@',
                name:'@'
            },
            template: require('./grid-template.html'),
            replace: false,
            controller: 'Directive.Grid.Controller'
        }
    }
];