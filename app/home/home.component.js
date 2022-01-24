'use strict';

angular.
  module('home')
  .filter('startFrom', function () {
    return function (input, start) {
      if (input) {
        start = +start;
        return input.slice(start);
      }
      return [];
    };
  })
  .component('homeComponent', {
    templateUrl: 'home/home.template.html',
    controller: ['$scope', 'Hero',
      function HomeController($scope, Hero) {
        this.loading = true

        $scope.currentPage = 0;
        $scope.pageSize = 10;
        $scope.q = '';
        Promise.resolve(Hero.query())
          .then(value => {
            this.loading = false
            this.marvel = value
            console.log(value)
          })
          .catch(e => console.log(e))

        $scope.numberOfPages = function (totalItems) {
          return Math.ceil(totalItems / $scope.pageSize);
        }
        $scope.$watch('q', function (newValue, oldValue) {
          if (oldValue != newValue) {
            $scope.currentPage = 0;
          }
        }, true);
      }

    ]
  });
