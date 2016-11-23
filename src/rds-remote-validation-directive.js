(function() {
  'use strict';

  angular
    .module('schemaForm')
    .directive('remoteValidation', remoteValidation);

  remoteValidation.$inject = ['$log', '$interpolate', '$http', '$compile'];

  function remoteValidation($log, $interpolate, $http, $compile) {
    var directive = {
      restrict: 'A',
      scope: false,
      link: link,

    };
    return directive;

    function link(scope, element, attrs) {
      // if value is not provided do nothing
      if (!scope.form.remoteValidation)
        return;

      var form = scope.form;
      var model = scope.model;

      var _interpolatedUrl;

      var regex_interpolate = /({)([^}]*)(})/gm;
      var _validationTemplateUrl = form.remoteValidation.replace(regex_interpolate, '$1$1 model.$2 $3$3');
      $log.debug("remoteValidation#URL after processing:" + _validationTemplateUrl);

      _watchInput();

      function _watchInput() {
        // var valURL = form.remoteValidation;
        $log.debug("remoteValidation#link - _validationTemplateUrl: " + _validationTemplateUrl);
        if (!_validationTemplateUrl) {
          $log.debug("remoteValidation#link - _validationTemplateUrl is not set, not watching anything");
          return;
        }
        $log.debug("we are watching ----> model." + form.key[0]);
        scope.$watch("model." + form.key[0], function(newValue, oldValue) {
          var exp;
          if (newValue) {
            $log.debug("remoteValidation#link#url:" + _validationTemplateUrl);
            exp = $interpolate(_validationTemplateUrl, false, null, true);
            _interpolatedUrl = exp(scope);
            $log.debug("remoteValidation#link#url: " + _interpolatedUrl);
            validate();
          }
        });
      }

      function validate() {

        $http({
          method: 'GET',
          url: _interpolatedUrl
        }).then(function(response) {
          // get data and add it to the model
          var data = response.data;
          // angular.extend(model, data);

          $log.debug("remoteValidation#link#response.data - :" + data);

          // expects a boolean only.
          var result = data.validation;
          $log.debug("remoteValidation#link#response.data.validation - :" + result);

          // do our stuff.... (check how this is done with standard validation for consistency purposes.)
          displayErrors(result);

        }).catch(function(response) {
          // TODO: Not sure if we have a generic exception handler for directive exceptions. Do nothing for now.
        });
      }

      // broadcast validation errors
      function displayErrors(result){
        $log.debug("remoteValidation#displayErrors#result - :" + result);
        // setup validation messages as an array
        if (scope.form.complexValidationMessage) {
            if (!scope.form.validationMessage) {
                scope.form.validationMessage = {};
            } else if (typeof $scope.form.validationMessage === "string") {
                // take validationMessage and shoehorn it into a new array of messages
                var defaultValidationMessage = scope.form.validationMessage;
                scope.form.validationMessage = {};
                scope.form.validationMessage["202"] = defaultValidationMessage;
            }
            scope.form.validationMessage['remoteValidation'] = scope.form.remoteValidationMessage;
        }

        if (result) {
            console.log('schemaForm.error.' + scope.form.key.join('.') + "  remoteValidation  valid");
            //$scope.form.complexValidationResult = true;
            if (scope.ngModel.$$parentForm.$dirty)
                scope.$broadcast('schemaForm.error.' + scope.form.key.join('.'), 'remoteValidation', true);
        } else {
            console.log('schemaForm.error.' + scope.form.key.join('.') + "  remoteValidation  invalid");
            //$scope.form.complexValidationResult = false;

            //FIXME: copied from complex-validation.js doesn not check til root of document (not sure why this is required)
            var isFormDirty = scope.ngModel.$$parentForm.$dirty
            if (!isFormDirty && scope.ngModel.$$parentForm.$$parentForm){
                isFormDirty = scope.ngModel.$$parentForm.$$parentForm.$dirty;
            }
            if (isFormDirty){
                console.log('Im dirty!');
                scope.$broadcast('schemaForm.error.' + scope.form.key.join('.'), 'remoteValidation');
            }
        }
      }
    }
  }
})();
