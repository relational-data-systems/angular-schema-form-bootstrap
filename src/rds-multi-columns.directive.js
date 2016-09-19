(function() {
  'use strict';

  angular
    .module('schemaForm')
    .directive('rdsMultiColumns', rdsMultiColumns);

  /* @ngInject */
  function rdsMultiColumns($log) {
    var directive = {
      scope: false,
      controller: RdsMultiColumnsController,
      controllerAs: 'multiColCtrl',
      restrict: 'A',
      templateUrl: 'decorators/bootstrap/rds-multi-columns.template.html'
    };
    return directive;
  }

  RdsMultiColumnsController.$inject = ['$scope', '$log'];

  /* @ngInject */
  function RdsMultiColumnsController($scope, $log) {
    var vm = this;

    vm.bootstrapCol = 12 / $scope.form.columns;
    // TODO: Can be further abstracted for use in radio, we may need to use an isolated scope
    vm.itemsPerColumn = parseInt($scope.titleMapValues.length / $scope.form.columns);
  }
})();