'use strict';

angular.module('shareApp')
  .controller('MainCtrl', function($scope, $rootScope){

    // no information on myself returned by LinkedIn API yet
    $rootScope.me = {
      found: false
    };

    //Ran by app.js once LinkedIn SDK is loaded up
    $scope.startApp = function() {

      // linkedIn API is now ready, show login button
      $rootScope.linkedInReady = true;
      $rootScope.$digest();
    };

    //Ran when LinkedIn user logs in.
    $scope.foundMe = function(me){

      // logged in, returned my information
      $rootScope.me = me;
      $rootScope.me.found = true;

      // digest
      $rootScope.$digest();
    };

  });
