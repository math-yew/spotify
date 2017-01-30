angular.module('spotify', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('login', {
        url:'/login',
        templateUrl: './js/login.html'
      })
      .state('search', {
        url:'/search',
        controller: 'searchCtrl',
        templateUrl: './js/search.html'
      })
      .state('playlist', {
        url:'/playlist/:id/:userid/:name/:image',
        controller: 'playlistCtrl',
        templateUrl: './js/playlist.html'
      })
      .state('confirm', {
        url:'/confirm/:confirm',
        controller: 'confirmCtrl',
        templateUrl: './js/confirm.html'
      })

})
