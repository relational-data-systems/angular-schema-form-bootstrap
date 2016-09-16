(function() {
    'use strict';

    angular
        .module('schemaForm')
        .directive('checkboxesMultiColumn', checkboxesMultiColumn);

    /* @ngInject */
    function checkboxesMultiColumn($log) {
        var directive = {
            scope: false,
            controller: CheckboxesMultiColumnController,
            controllerAs: 'ctrl',
            restrict: 'A',
        };
        return directive;

    }

    CheckboxesMultiColumnController.$inject = ['$log'];

    /* @ngInject */
    function CheckboxesMultiColumnController($log) {

    }
})();