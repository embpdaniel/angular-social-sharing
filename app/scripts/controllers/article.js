'use strict';
/*globals FB, IN*/
angular.module('shareApp')
  .controller('ArticleCtrl', function($scope){

    $scope.shareFb = function(url, pic, name, caption, desc){

      FB.ui({
        method: 'feed',
        link: url,
        picture: pic,
        name: name,
        caption: caption,
        description: desc
      });

    };

    $scope.shareLinkedIn = function (url, pic, name, caption, desc){

      var payload = {
        'comment': 'This is a comment test.',
        'content': {
          'title': name,
          'description': desc,
          'submitted-url': url,
          'submitted-image-url': pic
        },
        'visibility': {
          'code': 'connections-only'
        }
      };

      IN.API.Raw('/people/~/shares?format=json')
        .method('POST')
        .body(JSON.stringify(payload))
        .result(function(data){
          console.log(data);
        })
        .error(function(error){
          console.log(error);
        });

    };


});

