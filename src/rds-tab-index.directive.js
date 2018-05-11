(function () {
  'use strict';

  angular
    .module('schemaForm')
    .directive('rdsTabIndex', RdsTabIndex);

  RdsTabIndex.$inject = [];

  function RdsTabIndex () {
    var directive = {      
      restrict: 'A',
      scope: true,
      compile: function() {
        return {
          pre: function($scope, element, attributes) {
              var tabIndex = attributes.rdsTabIndex
              var parentHidden = $scope.$parent.containerHidden;
              $scope.containerHidden = parentHidden || tabIndex != $scope.form.selectedTab;              
              
              $scope.$on('tabs.activeTab.change', function(event, args) {
                var parentHidden = $scope.$parent.containerHidden;
                $scope.containerHidden = parentHidden || tabIndex!=$scope.form.selectedTab;                
              });
            }
        };
      }      
    };    
    
    return directive;
  }
})();
