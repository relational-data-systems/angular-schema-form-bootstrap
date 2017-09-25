(function () {
  'use strict';

  angular
    .module('schemaForm')
    .directive('radiosHelper', radiosHelper);

  radiosHelper.$inject = ['$log'];

  function radiosHelper ($log) {
    var directive = {
      controller: RadiosHelperController,
      controllerAs: 'radiosHelperCtrl',
      restrict: 'A',
      scope: false
    };
    return directive;
  }

  RadiosHelperController.$inject = ['$scope'];

  /* @ngInject */
  function RadiosHelperController ($scope) {
    var form = $scope.form;

    var vm = this;
    vm.getName = getName;
    vm.markNgModelDirty = markNgModelDirty;

    function getName () {
      return form.key.join('.') + _getArrayIndexIfAny();
    }

    function markNgModelDirty () {
      $scope.ngModel.$setDirty();
    }

    function _getArrayIndexIfAny () {
      var possibleIndex = $scope.$parent.$parent.$index;
      return angular.isNumber(possibleIndex) ? possibleIndex : '';
    }
  }
})();
