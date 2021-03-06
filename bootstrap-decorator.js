angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("decorators/bootstrap/actions-trcl.html","<div class=\"btn-group schema-form-actions {{::form.htmlClass}}\" ng-transclude=\"\"></div>");
$templateCache.put("decorators/bootstrap/actions.html","<div class=\"btn-group schema-form-actions {{::form.htmlClass}}\"><input ng-repeat-start=\"item in form.items\" type=\"submit\" class=\"btn {{:: item.style || \'btn-default\' }} {{::form.fieldHtmlClass}}\" value=\"{{::item.title}}\" ng-if=\"item.type === \'submit\'\"> <button ng-repeat-end=\"\" class=\"btn {{:: item.style || \'btn-default\' }} {{::form.fieldHtmlClass}}\" type=\"button\" ng-disabled=\"form.readonly\" ng-if=\"item.type !== \'submit\'\" ng-click=\"buttonClick($event,item)\"><span ng-if=\"item.icon\" class=\"{{::item.icon}}\"></span>{{::item.title}}</button></div>");
$templateCache.put("decorators/bootstrap/array.html","<div class=\"schema-form-array {{::form.htmlClass}}\" sf-field-model=\"sf-new-array\" sf-new-array=\"\"><label class=\"control-label\" ng-show=\"showTitle()\">{{::form.title }}</label><div sf-field-model=\"ng-hide\" ng-hide=\"!$$value$$.length && htmlWhenEmpty\"><ol class=\"list-group\" sf-field-model=\"\" ng-if=\"form.disableItemDnd\"><li class=\"list-group-item {{::form.fieldHtmlClass}}\" schema-form-array-items=\"\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\"><button ng-hide=\"form.readonly || form.remove === null\" ng-click=\"deleteFromArray($index)\" ng-disabled=\"form.schema.minItems >= modelArray.length\" type=\"button\" class=\"close pull-right sf-array-close-button rds-array-delete-btn\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button></li></ol><ol class=\"list-group\" sf-field-model=\"\" ui-sortable=\"form.sortOptions\" ng-if=\"!form.disableItemDnd\"><li class=\"list-group-item {{::form.fieldHtmlClass}}\" schema-form-array-items=\"\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\"><button ng-hide=\"form.readonly || form.remove === null\" ng-click=\"deleteFromArray($index)\" ng-disabled=\"form.schema.minItems >= modelArray.length\" type=\"button\" class=\"close pull-right sf-array-close-button rds-array-remove-btn\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button></li></ol></div><div sf-field-model=\"ng-if\" ng-if=\"!$$value$$.length && htmlWhenEmpty\" ng-bind-html=\"htmlWhenEmpty\"></div><div class=\"clearfix schema-form-array-footer\" ng-model=\"modelArray\" schema-validate=\"form\"><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div><button ng-hide=\"(form.readonly || form.add === null || form.disableAdd === true ) && !shouldShowAsUsedWithSubmodelAPI()\" ng-click=\"appendToArray()\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" type=\"button\" class=\"btn {{:: form.style.add || \'btn-default\' }} rds-array-add-btn pull-right\"><i class=\"glyphicon glyphicon-plus\"></i> {{:: form.add || \'Add\'}}</button></div></div>");
$templateCache.put("decorators/bootstrap/btn-group.html","<div class=\"schema-form-section {{::form.htmlClass}} text-center\"></div>");
$templateCache.put("decorators/bootstrap/checkbox.html","<div class=\"checkbox schema-form-checkbox {{::form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'required\': form.required}\"><label class=\"{{::form.labelHtmlClass}}\"><input type=\"checkbox\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" remote-validation=\"\" class=\"{{::form.fieldHtmlClass}}\" name=\"{{::form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.title\"></span></label><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/checkboxes.html","<div sf-field-model=\"sf-new-array\" sf-new-array=\"\" class=\"form-group schema-form-checkboxes {{::form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'required\': form.required}\"><label class=\"control-label {{::form.labelHtmlClass}}\" sf-field-model=\"\" remote-validation=\"\" schema-validate=\"form\" ng-show=\"showTitle()\">{{::form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{::form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label><div class=\"checkbox\" ng-if=\"!form.columns || form.columns === 1\" ng-repeat=\"entry in form.titleMap track by $index\"><label><input type=\"checkbox\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"{{::form.fieldHtmlClass}}\" ng-model=\"titleMapValues[$index]\" name=\"{{::form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.titleMap[$index].name\"></span></label></div><rds-multi-columns size=\"{{::form.titleMap.length}}\" ng-if=\"form.columns > 1\"><div ng-repeat=\"val in titleMapValues.slice($parent.colCtrl.indexFrom, $parent.colCtrl.indexTo) track by $index\" class=\"checkbox\"><label><input type=\"checkbox\" ng-disabled=\"form.readonly\" sf-changed=\"form\" class=\"{{::form.fieldHtmlClass}}\" ng-model=\"titleMapValues[$index + $parent.$parent.colCtrl.indexFrom]\" name=\"{{::form.key.slice(-1)[0]}}\"> <span ng-bind-html=\"form.titleMap[$index + $parent.$parent.colCtrl.indexFrom].name\"></span></label></div></rds-multi-columns><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/date.html","<div class=\"form-group schema-form-{{::form.type}} {{::form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false, \'required\': form.required }\"><label class=\"control-label {{::form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{::form.key.slice(-1)[0]}}\">{{::form.title}}</label><div id=\"{{::form.key.slice(-1)[0]}}\" ng-show=\"form.key\" rds-date=\"\" sf-field-model=\"replaceAll\" ng-init=\"initInternalModel($$value$$);\" ng-model=\"$$value$$\" schema-validate=\"form\" remote-validation=\"\"><input type=\"text\" class=\"form-control {{::form.fieldHtmlClass}}\" ng-disabled=\"form.readonly\" sf-changed=\"form\" ng-model=\"dateCtrl._internalDate\" view=\"date\" max-view=\"year\" min-view=\"date\" date-time=\"\" date-change=\"pickerChangeDate\" ng-change=\"syncSchemaFormNgModel();\" format=\"{{::form.dateViewFormat ? form.dateViewFormat : \'DD-MM-YYYY\'}}\" min-date=\"minDate\" max-date=\"maxDate\" auto-close=\"true\"></div><span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\" aria-hidden=\"true\"></span> <span ng-if=\"hasError() || hasSuccess()\" id=\"{{::form.key.slice(-1)[0] + \'Status\'}}\" class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/default.html","<div class=\"form-group schema-form-{{::form.type}} {{::form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false, \'required\': form.required}\"><label class=\"control-label {{::form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{::form.key.slice(-1)[0]}}\">{{::form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{::form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label> <input ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\" ng-show=\"form.key\" type=\"{{::form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{::form.placeholder}}\" class=\"form-control {{::form.fieldHtmlClass}}\" id=\"{{::form.key.slice(-1)[0]}}\" sf-field-model=\"\" ng-disabled=\"form.readonly\" schema-validate=\"form\" remote-validation=\"\" name=\"{{::form.key.slice(-1)[0]}}\" aria-describedby=\"{{::form.key.slice(-1)[0] + \'Status\'}}\"><div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\" ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\"><span ng-if=\"form.fieldAddonLeft\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonLeft\"></span> <input ng-show=\"form.key\" type=\"{{::form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{::form.placeholder}}\" class=\"form-control {{::form.fieldHtmlClass}}\" id=\"{{::form.key.slice(-1)[0]}}\" sf-field-model=\"\" ng-disabled=\"form.readonly\" schema-validate=\"form\" remote-validation=\"\" name=\"{{::form.key.slice(-1)[0]}}\" aria-describedby=\"{{::form.key.slice(-1)[0] + \'Status\'}}\"> <span ng-if=\"form.fieldAddonRight\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonRight\"></span></div><span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\" aria-hidden=\"true\"></span> <span ng-if=\"hasError() || hasSuccess()\" id=\"{{::form.key.slice(-1)[0] + \'Status\'}}\" class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/fieldset.html","<fieldset ng-disabled=\"form.readonly\" class=\"schema-form-fieldset {{::form.htmlClass}}\"><legend ng-class=\"{\'sr-only\': !showTitle() }\">{{::form.title}}</legend><div class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></div></fieldset>");
$templateCache.put("decorators/bootstrap/help.html","<div class=\"helpvalue schema-form-helpvalue {{::form.htmlClass}}\" ng-bind-html=\"trustAsHtml(form.helpvalue)\"></div>");
$templateCache.put("decorators/bootstrap/key-container.html","<div class=\"schema-form-section {{::form.htmlClass}}\" sf-field-model=\"\"></div>");
$templateCache.put("decorators/bootstrap/radio-buttons.html","<div class=\"form-group schema-form-radiobuttons {{::form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'required\': form.required}\"><div><label class=\"control-label {{::form.labelHtmlClass}}\" ng-show=\"showTitle()\" sf-field-model=\"\" schema-validate=\"form\" remote-validation=\"\">{{::form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{::form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label></div><div class=\"btn-group\"><label sf-field-model=\"replaceAll\" class=\"btn {{ (item.value === $$value$$) ? form.style.selected || \'btn-default\' : form.style.unselected || \'btn-default\'; }}\" ng-class=\"{ active: item.value === $$value$$ }\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{::form.fieldHtmlClass}} hidden\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" ng-value=\"item.value\" name=\"{{::form.key.join(\'.\')}}\" radios-helper=\"\" ng-click=\"radiosHelperCtrl.markNgModelDirty()\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/radios-inline.html","<div class=\"form-group schema-form-radios-inline {{::form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'required\': form.required}\"><label class=\"control-label {{::form.labelHtmlClass}}\" ng-show=\"showTitle()\" sf-field-model=\"\" schema-validate=\"form\" remote-validation=\"\">{{::form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{::form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label><div><label class=\"radio-inline\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{::form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"item.value\" radios-helper=\"\" ng-click=\"radiosHelperCtrl.markNgModelDirty()\" name=\"{{radiosHelperCtrl.getName()}}\"> <span ng-bind-html=\"item.name\"></span></label></div><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/radios.html","<div class=\"form-group schema-form-radios {{::form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'required\': form.required}\"><label class=\"control-label {{::form.labelHtmlClass}}\" sf-field-model=\"\" schema-validate=\"form\" remote-validation=\"\" ng-show=\"showTitle()\">{{::form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{::form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label><div ng-if=\"!form.columns || form.columns === 1\" class=\"radio\" ng-repeat=\"entry in form.titleMap\"><label><input type=\"radio\" class=\"{{::form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"entry.value\" radios-helper=\"\" ng-click=\"radiosHelperCtrl.markNgModelDirty()\" name=\"{{radiosHelperCtrl.getName()}}\"> <span ng-bind-html=\"entry.name\"></span></label></div><rds-multi-columns size=\"{{::form.titleMap.length}}\" ng-if=\"form.columns > 1\"><div class=\"radio\" ng-repeat=\"entry in form.titleMap.slice($parent.colCtrl.indexFrom, $parent.colCtrl.indexTo)\"><label><input type=\"radio\" class=\"{{::form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"entry.value\" radios-helper=\"\" ng-click=\"radiosHelperCtrl.markNgModelDirty()\" name=\"{{radiosHelperCtrl.getName()}}\"> <span ng-bind-html=\"entry.name\"></span></label></div></rds-multi-columns><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/rds-multi-columns.template.html","<div class=\"row\"><div ng-repeat=\"n in [].constructor(form.columns) track by $index\" rds-column=\"\" ng-class=\"[\'col-xs-\'+multiColCtrl.bootstrapCol, \'col-sm-\'+multiColCtrl.bootstrapCol, \'col-md-\'+multiColCtrl.bootstrapCol, \'col-lg-\'+multiColCtrl.bootstrapCol]\"><div ng-transclude=\"\"></div></div></div>");
$templateCache.put("decorators/bootstrap/section.html","<div class=\"schema-form-section {{::form.htmlClass}}\"></div>");
$templateCache.put("decorators/bootstrap/select.html","<div class=\"form-group {{::form.htmlClass}} schema-form-select\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false, \'required\': form.required}\"><label class=\"control-label {{::form.labelHtmlClass}}\" ng-show=\"showTitle()\">{{::form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{::form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label><select ng-if=\"!form.readonly\" sf-field-model=\"\" ng-disabled=\"form.readonly\" sf-changed=\"form\" remote-validation=\"\" class=\"form-control {{::form.fieldHtmlClass}}\" schema-validate=\"form\" ng-options=\"item.value as item.name group by item.group for item in form.titleMap\" name=\"{{::form.key.slice(-1)[0]}}\"></select><input ng-if=\"form.readonly\" value=\"{{selectedOptionCtrl.selected.name}}\" rds-selected-option=\"\" type=\"text\" placeholder=\"{{::form.placeholder}}\" class=\"form-control {{::form.fieldHtmlClass}}\" id=\"{{::form.key.slice(-1)[0]}}\" ng-disabled=\"form.readonly\"><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/bootstrap/submit.html","<span class=\"schema-form-submit {{::form.htmlClass}}\"><input type=\"submit\" class=\"btn {{:: form.style || \'btn-default\' }} {{::form.fieldHtmlClass}}\" ng-class=\"{disabled: evalExpr(\'$$ctrl$$\').httpPending}\" value=\"{{::form.title}}\" ng-disabled=\"form.readonly || evalExpr(\'$$ctrl$$\').httpPending\" ng-if=\"form.type === \'submit\'\"> <button class=\"btn {{:: form.style || \'btn-default\' }}\" type=\"button\" ng-class=\"{disabled: evalExpr(\'$$ctrl$$\').httpPending}\" ng-click=\"buttonClick($event,form)\" ng-disabled=\"form.readonly || evalExpr(\'$$ctrl$$\').httpPending\" ng-if=\"form.type !== \'submit\'\"><span ng-if=\"form.icon\" class=\"{{::form.icon}}\"></span> {{::form.title}} <span ng-show=\"form.httpPending\" data-placement=\"right\" class=\"glyphicon rds-spinner-icon-sm\" aria-hidden=\"true\"></span></button></span>");
$templateCache.put("decorators/bootstrap/tabarray.html","<div ng-model=\"modelArray\" schema-validate=\"form\" sf-field-model=\"sf-new-array\" sf-new-array=\"\" class=\"clearfix schema-form-tabarray schema-form-tabarray-{{::form.tabType || \'left\'}} {{::form.htmlClass}}\"><div ng-if=\"!form.tabType || form.tabType !== \'right\'\" ng-class=\"{\'col-xs-3\': !form.tabType || form.tabType === \'left\'}\"><ul class=\"nav nav-tabs\" ng-class=\"{ \'tabs-left\': !form.tabType || form.tabType === \'left\'}\"><li sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-click=\"$event.preventDefault() || (form.selectedTab = $index)\" ng-class=\"{active: form.selectedTab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" ng-click=\"$event.preventDefault() || (form.selectedTab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{:: form.add || \'Add\'}}</a></li></ul></div><div ng-class=\"{\'col-xs-9\': !form.tabType || form.tabType === \'left\' || form.tabType === \'right\'}\"><div class=\"tab-content {{::form.fieldHtmlClass}}\"><div class=\"tab-pane clearfix tab{{::form.selectedTab}} index{{::$index}}\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-show=\"form.selectedTab === $index\" ng-class=\"{active: form.selectedTab === $index}\"><div schema-form-array-items=\"\"></div><div class=\"row\"><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left\"><button ng-hide=\"form.readonly\" ng-click=\"form.selectedTab = indexDown($index)\" ng-disabled=\"$index <= 0\" type=\"button\" class=\"btn {{:: form.style.moveUp || \'btn-info\' }}\"><i class=\"glyphicon glyphicon-arrow-up\"></i> {{:: form.moveUp || \'Move Up\'}}</button> <button ng-hide=\"form.readonly\" ng-click=\"form.selectedTab = indexUp($index)\" ng-disabled=\"$index >= modelArray.length - 1\" type=\"button\" class=\"btn {{:: form.style.moveDown || \'btn-info\' }}\"><i class=\"glyphicon glyphicon-arrow-down\"></i> {{:: form.moveDown|| \'Move Down\'}}</button></div><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right\"><button ng-hide=\"form.readonly\" ng-click=\"form.selectedTab = deleteFromArray($index).length - 1\" ng-disabled=\"form.schema.minItems >= modelArray.length\" type=\"button\" class=\"btn {{:: form.style.remove || \'btn-default\' }}\"><i class=\"glyphicon glyphicon-trash\"></i> {{:: form.remove || \'Remove\'}}</button></div></div></div><div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div></div></div></div><div ng-if=\"form.tabType === \'right\'\" class=\"col-xs-3\"><ul class=\"nav nav-tabs tabs-right\"><li sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\" ng-click=\"$event.preventDefault() || (form.selectedTab = $index)\" ng-class=\"{active: form.selectedTab === $index}\"><a href=\"#\">{{interp(form.title,{\'$index\':$index, value: item}) || $index}}</a></li><li ng-hide=\"form.readonly\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" ng-click=\"$event.preventDefault() || (form.selectedTab = appendToArray().length - 1)\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i> {{:: form.add || \'Add\'}}</a></li></ul></div>");
$templateCache.put("decorators/bootstrap/tabs.html","<div class=\"schema-form-tabs {{::form.htmlClass}}\" rds-tabs=\"\"><ul class=\"nav nav-tabs\"><li ng-repeat=\"tab in form.tabs\" ng-disabled=\"form.readonly\" ng-click=\"$event.preventDefault() || (rdsTabsCtrl.selectTab($index))\" ng-class=\"{active: form.selectedTab === $index}\"><a href=\"#\">{{::tab.title}}</a></li></ul><div class=\"tab-content {{::form.fieldHtmlClass}}\"></div></div>");
$templateCache.put("decorators/bootstrap/textarea.html","<div class=\"form-group has-feedback {{::form.htmlClass}} schema-form-textarea\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'required\': form.required}\"><label class=\"control-label {{::form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{::form.key.slice(-1)[0]}}\">{{::form.title}} <a ng-if=\"form.tooltip\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{::form.tooltip}}\"><i class=\"glyphicon glyphicon-info-sign\"></i></a></label> <textarea ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\" class=\"form-control {{::form.fieldHtmlClass}}\" id=\"{{::form.key.slice(-1)[0]}}\" sf-changed=\"form\" placeholder=\"{{::form.placeholder}}\" ng-disabled=\"form.readonly\" sf-field-model=\"\" remote-validation=\"\" schema-validate=\"form\" name=\"{{::form.key.slice(-1)[0]}}\"> </textarea><div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\" ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\"><span ng-if=\"form.fieldAddonLeft\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonLeft\"></span> <textarea class=\"form-control {{::form.fieldHtmlClass}}\" id=\"{{::form.key.slice(-1)[0]}}\" sf-changed=\"form\" placeholder=\"{{::form.placeholder}}\" ng-disabled=\"form.readonly\" sf-field-model=\"\" schema-validate=\"form\" name=\"{{::form.key.slice(-1)[0]}}\"> </textarea><span ng-if=\"form.fieldAddonRight\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonRight\"></span></div><span class=\"help-block\" sf-message=\"form.description\"></span></div>");}]);
angular.module('schemaForm').config(['schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider',
function(decoratorsProvider, sfBuilderProvider, sfPathProvider) {
  var base = 'decorators/bootstrap/';

  var simpleTransclusion  = sfBuilderProvider.builders.simpleTransclusion;
  var ngModelOptions      = sfBuilderProvider.builders.ngModelOptions;
  var ngModel             = sfBuilderProvider.builders.ngModel;
  var sfField             = sfBuilderProvider.builders.sfField;
  var condition           = sfBuilderProvider.builders.condition;
  var array               = sfBuilderProvider.builders.array;
  var jsExpression        = sfBuilderProvider.builders.jsExpression;

  // Tabs is so bootstrap specific that it stays here.
  var tabs = function(args) {
    if (args.form.tabs && args.form.tabs.length > 0) {
      var tabContent = args.fieldFrag.querySelector('.tab-content');

      args.form.tabs.forEach(function(tab, index) {
        var div = document.createElement('div');
        div.className = 'tab-pane';
        div.setAttribute('ng-disabled', 'form.readonly');
        div.setAttribute('ng-show', 'form.selectedTab === ' + index);
        div.setAttribute('ng-class', '{active: form.selectedTab === ' + index + '}');
        div.setAttribute("rds-tab-index", index);

        var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);
        div.appendChild(childFrag);
        tabContent.appendChild(div);
      });
      args.form.selectedTab = 0;
    }
  };

  // Set tabArray sortOptions.items default.
  var tabArray = function(args) {
    if(args.form.hasOwnProperty('sortOptions')) {
      if(!args.form.sortOptions.hasOwnProperty('items')) {
        args.form.sortOptions['items'] = 'li:not(:last-child)';
      }
    } else {
      args.form['sortOptions'] = {items: 'li:not(:last-child)'};
    }
    args.form.selectedTab = 0;
  }

  var selectPlaceholder = function(args) {
    if (args.form.placeholder) {
      var selectBox = args.fieldFrag.querySelector('select');
      var option = document.createElement('option');
      option.setAttribute('value', '');

      /* We only want the placeholder to show when we do not have a value on the model.
       * We make ngModel builder replace all so we can use $$value$$.
       */
      option.setAttribute('sf-field-model', 'replaceAll');

      /* https://github.com/angular/angular.js/issues/12190#issuecomment-115277040
       * angular > 1.4 does a emptyOption.attr('selected', true)
       * which does not like the ng-if comment.
       */
      if (angular.version.major === 1 && angular.version.minor < 4) {
        option.setAttribute('ng-if', '$$value$$ === undefined');
      } else {
        option.setAttribute('ng-show', '$$value$$ === undefined');
      }

      option.textContent = args.form.placeholder;

      selectBox.appendChild(option);
    }
  };

  // var defaults = [sfField, ngModel, ngModelOptions, condition, jsExpression];
  var defaults = sfBuilderProvider.stdBuilders;
  decoratorsProvider.defineDecorator('bootstrapDecorator', {
    textarea: {template: base + 'textarea.html', builder: defaults},
    fieldset: {template: base + 'fieldset.html', builder: [sfField, simpleTransclusion, condition]},
    array: {template: base + 'array.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
    tabarray: {template: base + 'tabarray.html', builder: [sfField, ngModelOptions, ngModel, array, condition, tabArray]},
    tabs: {template: base + 'tabs.html', builder: [sfField, ngModelOptions, tabs, condition]},
    section: {template: base + 'section.html', builder: [sfField, simpleTransclusion, condition]},
    'btn-group': {template: base + 'btn-group.html', builder: [sfField, simpleTransclusion, condition]},
    conditional: {template: base + 'section.html', builder: [sfField, simpleTransclusion, condition]},
    actions: {template: base + 'actions.html', builder: defaults},
    select: {template: base + 'select.html', builder: [selectPlaceholder, sfField, ngModel, ngModelOptions, condition]},
    checkbox: {template: base + 'checkbox.html', builder: defaults},
    checkboxes: {template: base + 'checkboxes.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
    number: {template: base + 'default.html', builder: defaults},
    password: {template: base + 'default.html', builder: defaults},
    submit: {template: base + 'submit.html', builder: defaults},
    button: {template: base + 'submit.html', builder: defaults},
    radios: {template: base + 'radios.html', builder: defaults},
    'radios-inline': {template: base + 'radios-inline.html', builder: defaults},
    radiobuttons: {template: base + 'radio-buttons.html', builder: defaults},
    help: {template: base + 'help.html', builder: defaults},
    keyContainer: {template: base + 'key-container.html', builder: [sfField, ngModel, ngModelOptions, simpleTransclusion, condition]},
    date: {template: base + 'date.html', builder: defaults},
    'default': {template: base + 'default.html', builder: defaults}
  }, []);

}]);

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
    $scope.$watch(function() {
      return $scope.multiColCtrl.size;
    }, function(size) {
      var multiColCtrl = $scope.multiColCtrl;
      vm.colIndex = $scope.$index;
      vm.isLast = $scope.$last;
      vm.isFirst = $scope.$first;
      vm.itemsCount = multiColCtrl.itemsPerColumn;
  
      // Distribute the items evenlly according to modulus
      vm.indexFrom = vm.colIndex * (vm.itemsCount + (vm.colIndex < multiColCtrl.modulus ? 1 : 0));
      vm.indexFrom += (vm.colIndex >= multiColCtrl.modulus ? multiColCtrl.modulus : 0);
      vm.indexTo = !vm.isLast ? (vm.indexFrom + vm.itemsCount + (vm.colIndex < multiColCtrl.modulus ? 1 : 0)) : multiColCtrl.size;
    });
  }
})();
(function () {
  'use strict';

  angular
        .module('schemaForm')
        .directive('rdsDate', rdsDate);

    /* @ngInject */
  function rdsDate () {
    var directive = {
      require: 'ngModel',
      controller: DateController,
      controllerAs: 'dateCtrl',
      restrict: 'A',
      scope: false
    };
    return directive;
  }

  DateController.$inject = ['$scope', '$log', 'sfSelect', '$element', '$timeout'];

    /* @ngInject */
  function DateController ($scope, $log, sfSelect, $element) {
    var vm = this;

    $scope.initInternalModel = initInternalModel;
    $scope.pickerChangeDate = pickerChangeDate;
    $scope.syncSchemaFormNgModel = syncSchemaFormNgModel;
    

    var form = $scope.form;
    $scope.minDate = form.minDate ? moment(form.minDate).local() : undefined;
    $scope.maxDate = form.maxDate ? moment(form.maxDate).local() : undefined;
    // var model = $scope.model;
    var isoFormatDateOnly = 'YYYY-MM-DD'; // date sent to server will be always in ISO format
    var isoFormatDateWithTime = 'YYYY-MM-DDTHH:mm:ss';
    var parseFormat = isoFormatDateOnly;
    if(form.schema.format==='date-time') {
      parseFormat = isoFormatDateWithTime;
    }
    var ngModel = $element.controller('ngModel'); // Points to the schema form model

    vm._internalDate /* Date */ = undefined; // Pointed by the internal ngModel
    vm.setValidity = setValidity

    function initInternalModel (initDate) {
      if (initDate) {
        try {
          var _temp = new moment(initDate, parseFormat);
          if (!_temp.isValid()) {
            $log.debug('rdsDate#initInternalModel - invalid while converting to ISO date:', initDate);
            vm._internalDate = new Date(initDate);
          } else {
            vm._internalDate = _temp.local().toDate();
          }
        } catch (e) {
          $log.debug('rdsDate#initInternalModel - exception while converting to date:', initDate);
        }
      } else if (form.defaultDate === 'today') {
        var today = moment().local();
        vm._internalDate = today.toDate();
        _updateNgModel(today.format(parseFormat));
      }
    }

    function _updateNgModel (dateString) { // default to today
      if (dateString) {
        ngModel.$setViewValue(moment(dateString).local().format(parseFormat));
      } else {
        ngModel.$setViewValue('');
      }
      ngModel.$commitViewValue();
    }

    function pickerChangeDate (modelName, pickedDate) {
      $log.debug('rdsDate#pickerChangeDate - new date: ', pickedDate);
      _updateNgModel(pickedDate);
    }

    // Watch the model value, and update the internal value
    $scope.$watch(
      function () {
        return ngModel.$modelValue;
      },
      function (newValue) {
        if (newValue) {
          vm._internalDate = moment(newValue, parseFormat);
        } else {
          vm._internalDate = undefined;
        }
      }
    );

    function syncSchemaFormNgModel () {
      _updateNgModel(vm._internalDate);
    }
    
    function setValidity(errorCode, isValid) {
      ngModel.$setValidity(errorCode, isValid);
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('schemaForm')
    .directive('rdsMultiColumns', rdsMultiColumns);

  /* @ngInject */
  function rdsMultiColumns($log) {
    var directive = {
      controller: RdsMultiColumnsController,
      controllerAs: 'multiColCtrl',
      restrict: 'AE',
      templateUrl: 'decorators/bootstrap/rds-multi-columns.template.html',
      scope: true,
      transclude: true,
      link: link
    };

    function link(scope, element, attrs) {
      // May need to figure out a better way to bind these values to controller while still use non-isolated scope
      attrs.$observe('size', function(size) {
        scope.multiColCtrl.size = parseInt(size);
        scope.multiColCtrl.itemsPerColumn = parseInt(size / scope.form.columns);
        scope.multiColCtrl.modulus = size % scope.form.columns;
      });
    }

    return directive;
  }

  RdsMultiColumnsController.$inject = ['$scope', '$log'];

  /* @ngInject */
  function RdsMultiColumnsController($scope, $log) {
    var vm = this;
    vm.bootstrapCol = 12 / $scope.form.columns;
  }
})();
(function() {
  'use strict';

  angular
    .module('schemaForm')
    .directive('rdsSelectedOption', rdsSelectedOption);

  rdsSelectedOption.$inject = ['$log'];

  /* @ngInject */
  function rdsSelectedOption($log) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      restrict: 'A',
      link: link,
      controller: RdsSelectedOptionController,
      controllerAs: 'selectedOptionCtrl',
      scope: false
    };
    return directive;

    function link(scope, element, attrs) {
      if (!scope.form) {
        $log.warn('rdsSelectedOption#link - scope does not have a value formItem.');
        return;
      }

      scope.$watch(function() {
        return [scope.modelValue(), scope.form.titleMap];
      }, function(valueAndTitleMap) {
        var newValue = valueAndTitleMap[0];
        var titleMap = valueAndTitleMap[1];
        if (!titleMap || !angular.isArray(titleMap)) {
          return;
        }

        for (var i = 0; i < titleMap.length; i++) {
          var entry = titleMap[i];
          if (entry && entry.value === newValue) {
            scope.selectedOptionCtrl.selected = entry;
            break;
          }
        }
      }, true);
    }
  }

  RdsSelectedOptionController.$inject = ['$scope'];

  function RdsSelectedOptionController($scope) {
    var vm = this;

    vm.selected = {};
  }

})();
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
