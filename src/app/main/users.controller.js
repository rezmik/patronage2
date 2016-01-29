(function() {
  'use strict';

  angular
    .module('myProject')
    .controller('UsersController', UsersController);

  /** @ngInject */
  /*function UsersController( $scope, $http ) {
          $http({
            method: 'GET',
            url: '/app/main/users.json'
          }).then(function success(response) {
            $scope.uzytkownicy = response.data.records;
          });
        }*/
  function UsersController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1453140917649;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
