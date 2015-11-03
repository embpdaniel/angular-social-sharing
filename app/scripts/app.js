'use strict';

angular
  .module('shareApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(['$rootScope', '$location', function($rootScope){

    // linkedIn not ready by default
    $rootScope.linkedInReady = false;

    $rootScope.$on('$routeChangeError', function(){
      console.log('route change error');
    });

  }])
  .config(function ($routeProvider, $sceProvider) {

    $sceProvider.enabled(false);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).when('/article', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });

  });

/* jshint ignore:start */

//LINKED IN
// runs when SDK is loaded
function displayLinkedInLogin() {
  console.log('displayLinkedInLogin');
  IN.Event.on(IN, 'auth', onLinkedInAuth);
  angular.element($('body')).scope().startApp();
}

// runs when the viewer has authenticated
function onLinkedInAuth() {
  console.log('onLinkedInAuth');
  IN.API.Profile('me')
    .fields(['firstName', 'lastName', 'pictureUrl', 'id', 'headline', 'location', 'summary', 'positions', 'twitter-accounts'])
    .result(onProfileReturned);
}

// fire off with linkedin profile information of the user
function onProfileReturned(profiles) {
  console.log('onProfileReturned');
  var member = profiles.values[0];
  angular.element($('body')).scope().foundMe(member);
}


//FB
function checkLoginState(){
  FB.getLoginStatus(function(response) {
    console.log(response);
  });
}

//Initialize LinkedIn SDK
$(function(){
  var cnfg = {
    apiKey:"77a369ntml9thv"
  }
  $('<script type="text/javascript" src="http://platform.linkedin.com/in.js">\n api_key: ' + cnfg.apiKey + ' \n onLoad: displayLinkedInLogin \n authorize: true  \n </script>').appendTo('body');
});
/* jshint ignore:end */
