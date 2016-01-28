angular.
	module('myProject', [
		'ui.router'
	])
	.config([ '$urlRouterProvider', '$stateProvider', function( $urlRouterProvider, $stateProvider ) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'home.html'
			})
			.state('users', {
				url: '/users',
				templateUrl: 'users.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'about.html'
			})
	}])