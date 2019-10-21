app.controller('pokemonController', ['$scope', '$routeParams', 'pokemonProvider', function ($scope, $routeParams, pokemonProvider) {
    console.trace('pokemonController');
    console.trace("pedimos a la API todos los pokemos");
    $scope.pokemons = {};
    pokemonProvider.listarPokemon().then( data => $scope.pokemons = data );
}]);