'use strict';

module.exports = function (basePath, min) {
    var target = '';

    if (min) {
        target = '.min';
    }

    var scripts = [
        // Note: angular-file-upload-shim.js MUST BE PLACED BEFORE angular.js and angular-file-upload.js AFTER angular.js
        //basePath + '/ng-file-upload/angular-file-upload-shim' + target + '.js',
        basePath + '/angular/angular' + target + '.js',
        basePath + '/angular-cookies/angular-cookies' + target + '.js',
        basePath + '/jquery/dist/jquery' + target + '.js',
        basePath + '/bootstrap/dist/js/bootstrap' + target + '.js',        
        //basePath + '/ng-file-upload/angular-file-upload' + target + '.js',
        basePath + '/lodash/dist/lodash' + target + '.js',
        basePath + '/angular-bootstrap/ui-bootstrap-tpls' + target + '.js',
        //basePath + '/angular-translate/angular-translate' + target + '.js',
        //basePath + '/messageformat/messageformat.js',
        //basePath + '/messageformat/locale/en.js',
        //basePath + '/messageformat/locale/fr.js',
        //basePath + '/messageformat/locale/es.js',
        //basePath + '/messageformat/locale/ru.js',
        //basePath + '/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat' + target + '.js',
        //basePath + '/angular-checklist-model/checklist-model.js',
        basePath + '/angular-ui-router/release/angular-ui-router' + target + '.js',
        basePath + '/alertify.js/lib/alertify' + target + '.js',
        //basePath + '/angular-ui-tree/dist/angular-ui-tree' + target + '.js',
        //basePath + '/restangular/dist/restangular' + target + '.js',
        //basePath + '/angulartics/dist/angulartics.min.js',
        //basePath + '/textAngular/dist/textAngular-sanitize.min.js',
        //basePath + '/textAngular/dist/textAngular.min.js'
    ];

    return scripts;
};