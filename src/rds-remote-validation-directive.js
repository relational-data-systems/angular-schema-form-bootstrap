(function() {
  'use strict';

  angular
    .module('schemaForm')
    .directive('remoteValidation', remoteValidation);

  remoteValidation.$inject = ['$log', '$interpolate', '$http', '$compile'];

  function remoteValidation($log, $interpolate, $http, $compile) {
    var directive = {
      controller: 'RemoteValidationController',
      controllerAs: 'vm',
      link: link,
      restrict: 'A',
      scope: true
    };
    return directive;

    function link(scope, element, attrs) {

      scope.syncData = syncData;

      var form = scope.form;
      var model = scope.model;

      var _url;

      _watchInput();

      function _watchInput() {
        var valURL = form.valURL;

        if (!valURL) {
          $log.debug("remoteValidation#link - valURL is not set, not watching anything");
          return;
        }

        scope.$watch("whatevertheFieldOnTheModelIs", function(newValue, oldValue) {
          var exp;
          if (newValue) {
            exp = $interpolate(dataURL, false, null, true);
            _url = exp(scope);
            validate();
          }
        });
      }

      function validate() {
        $log.debug("rdsAsfRemoteDataLoader#link#syncData - url:" + _url);

        $http({
          method: 'GET',
          url: _url
        }).then(function(response) {
          // get data and add it to the model
          var data = response.data;
          angular.extend(model, data);

          // excepts a boolean only.

          // do our stuff.... (check how this is done with standard validation for consistency purposes.)

        }).catch(function(response) {
          // TODO: Not sure if we have a generic exception handler for directive exceptions. Do nothing for now.
        });
      }
    }
  }

  RemoteValidationController.$inject = ['$scope', '$log'];

  function RemoteValidationController($scope, $log) {
    var vm = this;
  }
})();
