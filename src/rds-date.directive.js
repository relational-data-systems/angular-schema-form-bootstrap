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

    DateController.$inject = ['$scope', '$log', 'sfSelect', '$element', '$timeout'];

    /* @ngInject */
    function DateController($scope, $log, sfSelect, $element, $timeout) {
        var vm = this;

        $scope.initInternalModel = initInternalModel;
        $scope.changeDate = changeDate;

        var form = $scope.form;
        var model = $scope.model;

        vm.ngModelController = $element.controller('ngModel');
        // vm.date = form.defaultDate == "today" ? new Date() : null;
        vm.date = undefined;

        function initInternalModel(model) {
            if(model) {
                vm.date = new Date(model);
            }
        }

        function changeDate(modelName, newDate) {
            $log.debug("DATE CHANGE", newDate);
            vm.ngModelController.$setViewValue(moment(newDate));
            vm.ngModelController.$commitViewValue();
        }

        // Watch the model value, and update the internal value
        $scope.$watch(
            function() {
                return vm.ngModelController.$modelValue;
            },
            function(newValue, oldValue) {
                if ( moment(newValue) !== moment(oldValue) ) {
                    if (newValue !== undefined) {
                        vm.date = moment(newValue);
                    } else {
                        vm.date = newValue;
                    }
                }
            }
        );

    }
})();