var movieApp = angular.module('movieApp', []);

movieApp.controller('ActorCtrl', function($scope, $http) {
  
  function Actor(plainObject) {
    this.firstName = plainObject.firstName;
    this.lastName = plainObject.lastName;
    this.image = plainObject.image;
    this.isSelected = false;
    this.fullName = function() { return this.firstName + " " + this.lastName };
  }

  $http.get("dataActors.json").then(function(response){
    $scope.actors = [];
    for (var i = 0; i < response.data.length; i++) {
      $scope.actors.push(new Actor(response.data[i]));
    }
  });
  
  $scope.imgClick = function(actor) {
    // loop through actors to reset them to false
    for(var i=0; i<$scope.actors.length;i++) {
      $scope.actors[i].isSelected = false;
    }
    
    actor.isSelected = true;
  };
});

movieApp.controller('TopTenCtrl', function($scope, $http) {
  
  $http.get("dataMovies.json").then(function(response){
    $scope.movies = response.data;
  });

  
}).directive("movie", function() {
  return {
    templateUrl: "movie.html"
  };
});

