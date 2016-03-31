'use strict';

angular.module('myApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.tpl.html',
    controller: 'DashboardCtrl',
    controllerAs: 'vm'
  });
}])

.controller('DashboardCtrl', DashboardCtrl);

function DashboardCtrl() {
  var vm = {
    src: "img/george_pig.png",
    name: "George Pig"
    
  };

  angular.extend(this, vm);
}