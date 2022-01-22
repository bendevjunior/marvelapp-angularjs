'use strict';

angular.
  module('home').
  component('homeComponent', {
    templateUrl: 'home/home.template.html',
    controller: ['Hero',
      function HomeController(Hero) {
        this.loading = true
        Promise.resolve(Hero.query())
        .then(value => {
          this.loading = false
          this.marvel = value 
          console.log(value)
        })
        .catch(e => console.log(e))
        
      }
    ]
  });
