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
        controller: 'UsersConroller'   
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
