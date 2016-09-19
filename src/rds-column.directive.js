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
      templateUrl: 'decorators/bootstrap/rds-column.template.html',
      scope: true,
      transclude: true
    };
    return directive;
  }


  ColumnController.$inject = ['$scope', '$log'];

  /* @ngInject */
  function ColumnController($scope, $log) { 
    var vm = this;
    vm.columnIndex = $scope.$index;
    vm.itemsPerColumn = $scope.multiColCtrl.itemsPerColumn;
    vm.indexOffset = vm.columnIndex * vm.itemsPerColumn;
    vm.isLast = $scope.$last;
  }
})();