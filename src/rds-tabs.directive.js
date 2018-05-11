(function () {
  'use strict';

  angular
    .module('schemaForm')
    .directive('rdsTabs', RdsTabs);

  RdsTabs.$inject = [];

  function RdsTabs () {
    var directive = {
      controller: RdsTabsController,
      controllerAs: 'rdsTabsCtrl',
      restrict: 'A',
      scope: true
    };
    return directive;
  }

  RdsTabsController.$inject = ['$scope'];

  /* @ngInject */
  function RdsTabsController ($scope) {        
    var vm = this;
    vm.selectTab = selectTab;
    
    function selectTab (index) {
      $scope.form.selectedTab = index;      
      $scope.$broadcast("tabs.activeTab.change")
    }    
  }
})();
