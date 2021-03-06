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
    $scope.syncSchemaFormNgModel = syncSchemaFormNgModel;
    

    var form = $scope.form;
    $scope.minDate = form.minDate ? moment(form.minDate).local() : undefined;
    $scope.maxDate = form.maxDate ? moment(form.maxDate).local() : undefined;
    // var model = $scope.model;
    var isoFormatDateOnly = 'YYYY-MM-DD'; // date sent to server will be always in ISO format
    var isoFormatDateWithTime = 'YYYY-MM-DDTHH:mm:ss';
    var parseFormat = isoFormatDateOnly;
    if(form.schema.format==='date-time') {
      parseFormat = isoFormatDateWithTime;
    }
    var ngModel = $element.controller('ngModel'); // Points to the schema form model

    vm._internalDate /* Date */ = undefined; // Pointed by the internal ngModel
    vm.setValidity = setValidity

    function initInternalModel (initDate) {
      if (initDate) {
        try {
          var _temp = new moment(initDate, parseFormat);
          if (!_temp.isValid()) {
            $log.debug('rdsDate#initInternalModel - invalid while converting to ISO date:', initDate);
            vm._internalDate = new Date(initDate);
          } else {
            vm._internalDate = _temp.local().toDate();
          }
        } catch (e) {
          $log.debug('rdsDate#initInternalModel - exception while converting to date:', initDate);
        }
      } else if (form.defaultDate === 'today') {
        var today = moment().local();
        vm._internalDate = today.toDate();
        _updateNgModel(today.format(parseFormat));
      }
    }

    function _updateNgModel (dateString) { // default to today
      if (dateString) {
        ngModel.$setViewValue(moment(dateString).local().format(parseFormat));
      } else {
        ngModel.$setViewValue('');
      }
      ngModel.$commitViewValue();
    }

    function pickerChangeDate (modelName, pickedDate) {
      $log.debug('rdsDate#pickerChangeDate - new date: ', pickedDate);
      _updateNgModel(pickedDate);
    }

    // Watch the model value, and update the internal value
    $scope.$watch(
      function () {
        return ngModel.$modelValue;
      },
      function (newValue) {
        if (newValue) {
          vm._internalDate = moment(newValue, parseFormat);
        } else {
          vm._internalDate = undefined;
        }
      }
    );

    function syncSchemaFormNgModel () {
      _updateNgModel(vm._internalDate);
    }
    
    function setValidity(errorCode, isValid) {
      ngModel.$setValidity(errorCode, isValid);
    }
  }
})();
