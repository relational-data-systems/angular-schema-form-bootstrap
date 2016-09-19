(function() {
  'use strict';

  angular
    .module('schemaForm')
    .directive('rdsColumn', rdsColumn);

  /* @ngInject */
  function rdsColumn() {
    var directive = {
      require: 'rdsMultiColumns',
      controller: ColumnController,
      controllerAs: 'colCtrl',
      restrict: 'AE',
      scope: false
    };
    return directive;
  }


  ColumnController.$inject = ['$scope', '$log'];

  /* @ngInject */
  function ColumnController($scope, $log) { 
    var vm = this;
    vm.colIndex = $scope.$index;
    vm.isLast = $scope.$last;
    vm.itemsPerColumn = $scope.multiColCtrl.itemsPerColumn;

    vm.indexFrom = vm.colIndex * vm.itemsPerColumn;
    vm.indexTo = vm.indexFrom + vm.itemsPerColumn;
  }
})();