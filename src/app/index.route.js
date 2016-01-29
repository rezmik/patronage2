(function() {
  'use strict';

  angular
    .module('myProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'app/main/users.html',
        controller: [ '$scope', '$http', function ( $scope, $http ) {
          $http({
            method: 'GET',
            url: '/app/main/users.json'
          }).then(function success(response) {
            $scope.uzytkownicy = response.data.records;
          });
        }]  
        //controllerAs: 'user'

      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/main/about.html',
        controller: 'MainController',
        controllerAs: 'main'

      })

    $urlRouterProvider.otherwise('/');
  }

})();
