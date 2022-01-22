'use strict';

angular.
  module('heroDetail').
  component('heroDetail', {
    templateUrl: 'hero-detail/hero-detail.template.html',
    controller: ['$routeParams', 'Hero',
      function HeroDetailController($routeParams, Hero) {
        var self = this;
        self.hero = Hero.get({
          ts: ts,
          hash: hash(),
          apikey: PUBLIC_KEY,
          heroId: $routeParams.hero
        }
        );
      }
    ]
  });

