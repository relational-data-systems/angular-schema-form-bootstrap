(function () {
  'use strict';

  angular
        .module('schemaForm')
        .directive('rdsDate', rdsDate);

    /* @ngInject */
  function rdsDate () {
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
  function DateController ($scope, $log, sfSelect, $element) {
    var vm = this;

    $scope.initInternalModel = initInternalModel;
    $scope.pickerChangeDate = pickerChangeDate;
    $scope.onBlurCommit = onBlurCommit;

    var form = $scope.form;
    var model = $scope.model;
        // date sent to server will be always in this format
    var isoFormat = 'YYYY-MM-DD';

    vm.ngModelController = $element.controller('ngModel');
    vm.date = form.defaultDate == 'today' ? new Date() : undefined;
    vm.dateFormat = form.dateFormat ? form.dateFormat : 'DD-MM-YYYY';
    $scope.minDate = form.minDate ? form.minDate : undefined;
    $scope.maxDate = form.maxDate ? form.maxDate : undefined;

    function initInternalModel (model) {
      if (model) {
        try {
          vm.date = new moment(model, isoFormat);
          if (!vm.date.isValid()) {
            $log.debug('invalid while converting to date', model);
            vm.date = new Date(model);
          }
        } catch (e) {
          $log.debug('exception while converting to date', model);
          vm.date = new Date(model);
        }
      }
      if (form.defaultDate == 'today') {
        vm.ngModelController.$setViewValue(moment(vm.date));
        vm.ngModelController.$commitViewValue();
      }
    }

    function pickerChangeDate (modelName, newDate) {
      $log.debug('DATE CHANGE', newDate);
      vm.ngModelController.$setViewValue(moment(newDate));
      vm.ngModelController.$commitViewValue();
    }

        // Watch the model value, and update the internal value
    $scope.$watch(
            function () {
              return vm.ngModelController.$modelValue;
            },
            function (newValue, oldValue) {
              if (moment(newValue) !== moment(oldValue)) {
                if (newValue !== undefined) {
                  vm.date = moment(newValue);
                } else {
                  vm.date = newValue;
                }
              }
            }
        );

    function onBlurCommit (newValue) {
      var newDate = moment(newValue);
      newDate.toJSON = function () {
        return this.local().format(isoFormat);
      };
      if (!moment(newDate).isValid()) {
        newDate = undefined;
      }
      vm.ngModelController.$setViewValue(newDate);
      vm.ngModelController.$commitViewValue();
    }
  }
})();
