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
    var multiColCtrl = $scope.multiColCtrl; // better injected by link function?

    vm.colIndex = $scope.$index;
    vm.isLast = $scope.$last;
    vm.isFirst = $scope.$first;
    vm.itemsCount = multiColCtrl.itemsPerColumn;

    // Distribute the items evenlly according to modulus
    vm.indexFrom = vm.colIndex * (vm.itemsCount + (vm.colIndex < multiColCtrl.modulus ? 1 : 0));
    vm.indexFrom += (vm.colIndex >= multiColCtrl.modulus ? multiColCtrl.modulus : 0);
    vm.indexTo = !vm.isLast ? (vm.indexFrom + vm.itemsCount + (vm.colIndex < multiColCtrl.modulus ? 1 : 0)) : multiColCtrl.size;
  }
})();