angular.module('AttackOfTheSpaceKittyCtrl', []).
    controller('AttackOfTheSpaceKittyController', function($scope, $location, angularLoad) {
      angularLoad.loadCSS('css/attackOfTheSpaceKitty.css').then(function() {
      }).catch(function() {
      })
      angularLoad.loadScript('js/javascript/attackOfTheSpaceKitty/index.js').then(function() {
        initLook();
      }).catch(function() {
      })
    });
