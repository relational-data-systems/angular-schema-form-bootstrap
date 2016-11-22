(function() {
    'use strict';

    angular
        .module('schemaForm')
        .directive('rdsDate', rdsDate);

    /* @ngInject */
    function rdsDate() {
        var directive = {
            require: 'ngModel',
            controller: DateController,
            controllerAs: 'dateCtrl',
            restrict: 'A',
            scope: false
        };
        return directive;
    }

    DateController.$inject = ['$scope', '$log', 'sfSelect', '$element'];

    /* @ngInject */
    function DateController($scope, $log, sfSelect, $element) {
        var vm = this;

        $scope.initInternalModel = initInternalModel;

        var form = $scope.form;
        var model = $scope.model;

        vm.ngModelController = $element.controller('ngModel');
        vm.date = form.defaultDate == "today" ? new Date() : null;

        function initInternalModel(model) {
            if(model) {
                vm.date = new Date(model);
            }
        }

        // Watch the internal value, and update the model value
        $scope.$watch(
            function() {
                return vm.date;
            },
            function(newValue, oldValue) {
                if ( newValue !== oldValue ) {
                    vm.ngModelController.$setViewValue(new Date(newValue));
                    vm.ngModelController.$commitViewValue();
                }
            }
        );

        // Watch the model value, and update the internal value
        $scope.$watch(
            function() {
                return vm.ngModelController.$modelValue;
            },
            function(newValue, oldValue) {
                if ( new Date(newValue).toDateString() !== new Date(oldValue).toDateString() ) {
                    vm.date = new Date(newValue);
                }
            }
        );

    }
})();