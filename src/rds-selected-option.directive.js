(function() {
  'use strict';

  angular
    .module('schemaForm')
    .directive('rdsSelectedOption', rdsSelectedOption);

  rdsSelectedOption.$inject = ['$log'];

  /* @ngInject */
  function rdsSelectedOption($log) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      restrict: 'A',
      link: link,
      controller: RdsSelectedOptionController,
      controllerAs: 'selectedOptionCtrl',
      scope: false
    };
    return directive;

    function link(scope, element, attrs) {
      if (!scope.form) {
        $log.warn('rdsSelectedOption#link - scope does not have a value formItem.');
        return;
      }

      scope.$watch(function() {
        return [scope.modelValue(), scope.form.titleMap];
      }, function(valueAndTitleMap) {
        var newValue = valueAndTitleMap[0];
        var titleMap = valueAndTitleMap[1];
        if (!titleMap || !angular.isArray(titleMap)) {
          return;
        }

        for (var i = 0; i < titleMap.length; i++) {
          var entry = titleMap[i];
          if (entry && entry.value === newValue) {
            scope.selectedOptionCtrl.selected = entry;
            break;
          }
        }
      }, true);
    }
  }

  RdsSelectedOptionController.$inject = ['$scope'];

  function RdsSelectedOptionController($scope) {
    var vm = this;

    vm.selected = {};
  }

})();