(function () {
  'use strict';
  angular
      .module('material.components.autocomplete')
      .directive('mdHighlightText', MdHighlight);

  function MdHighlight () {
    return {
      terminal: true,
      scope: false,
      controller: 'MdHighlightCtrl'
    };
  }
})();
