'use strict';

angular.
  module('home').
  component('homeComponent', {
    templateUrl: 'home/home.template.html',
    controller: ['Hero',
      function HomeController(Hero) {
        this.loading = true
        console.log('carregando', this.loading)
        try {
          this.marvel = Hero.query();
          this.loading = false
        } catch (error) {
          this.loading = false
        }
        this.orderProp = 'age';
        
      }
    ]
  });
