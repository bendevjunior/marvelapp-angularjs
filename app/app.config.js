'use strict';

angular.
  module('marvelApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          template: '<home-component></home-component>'
        }).
        when('/hero/:hero', {
          template: '<hero-detail></hero-detail>'
        }).
        otherwise('/home');
    }
  ]);
