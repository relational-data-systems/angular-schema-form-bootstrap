(function() {
  'use strict';

  angular.module('schemaForm').directive('remoteValidation', remoteValidation);

  remoteValidation.$inject = ['$log', '$interpolate', '$http', '$compile'];

  function remoteValidation($log, $interpolate, $http, $compile) {
    var directive = {
      restrict: 'A',
      scope: false,
      priority: 500,
      //require: '?ngModel',
      link: link
    };
    return directive;

    function link(scope, element, attrs) {

      if (!scope.form.remoteValidation){
        return;
      }

      var form = scope.form;
      var model = scope.model;

      var regex_interpolate = /({)([^}]*)(})/gm;
      var _validationTemplateUrl = form.remoteValidation.replace(regex_interpolate, '$1$1 model.$2 $3$3');

      _watchInput();

      function _watchInput() {

        var _subme = "{{" + "model." + form.key[0] + "}}";

        scope.$watch("model." + form.key[0], function(newValue, oldValue) {
          var exp;
          // FIXME: newValue is always undefined after the first time the listener triggers.
          if (newValue) {

            // FIXME; does not work scope is broken in listener
            exp = $interpolate(_validationTemplateUrl, false, null, true);
            var interpolatedUrl = exp(scope);
            console.log('interpolatedUrl = ' + interpolatedUrl);
            // manually replace text that would be interpolated with the new value
            validate(interpolatedUrl);
          }
        });
      }

      function validate(interpolatedUrl) {

        $http({
          method: 'GET',
          url: interpolatedUrl
        }).then(function(response) {
          // get data and add it to the model
          var data = response.data;
          console.log("remoteValidation#link#response.data - :" + data);

          // expects a boolean only.
          var result = data.validation;
          console.log("remoteValidation#link#response.data.validation - :" + result);

          // do our stuff.... (check how this is done with standard validation for consistency purposes.)
          displayErrors(result);

        }).catch(function(response) {angular-schema-form-bootstrap
          // TODO: Not sure if we have a generic exception handler for directive exceptions. Do nothing for now.
        });
      }

      // broadcast validation errors
      function displayErrors(result){

        // setup validation messages as an array
        if (scope.form.complexValidationMessage) {
            if (!scope.form.validationMessage) {
                scope.form.validationMessage = {};
            } else if (typeof scope.form.validationMessage === "string") {
                // take validationMessage and shoehorn it into a new array of messages
                var defaultValidationMessage = scope.form.validationMessage;
                scope.form.validationMessage = {};
                scope.form.validationMessage["202"] = defaultValidationMessage;
            }
            scope.form.validationMessage['remoteValidation'] = scope.form.remoteValidationMessage;
        }

        if (result) {
            //scope.form.complexValidationResult = true;
            if (scope.ngModel.$$parentForm.$dirty)
                scope.$broadcast('schemaForm.error.' + scope.form.key.join('.'), 'remoteValidation', true);
        } else {
            //scope.form.complexValidationResult = false;

            //FIXME: copied from complex-validation.js doesn not check til root of document (not sure why this is required)
            var isFormDirty = scope.ngModel.$$parentForm.$dirty
            if (!isFormDirty && scope.ngModel.$$parentForm.$$parentForm){
                isFormDirty = scope.ngModel.$$parentForm.$$parentForm.$dirty;
            }
            if (isFormDirty){
                scope.$broadcast('schemaForm.error.' + scope.form.key.join('.'), 'remoteValidation');
            }
        }
      }
    }
  }

})();
