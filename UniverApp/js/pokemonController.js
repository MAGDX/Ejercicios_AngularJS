app.controller('pokemonController', ['$scope', '$routeParams', 'pokemonProvider', function ($scope, $routeParams, pokemonProvider) {
    console.trace('pokemonController');

    $scope.id = $routeParams.id;
    $scope.pokemons;

    // Eventos
    this.$onInit = function () {
        console.trace('pokemonController onInit');

        $scope.listar();
    } // End onInit

    // Funciones
    $scope.listar = function () {

        pokemonProvider.listar().then(
            response => { //funcion arrow, exito success, llamada OK
                console.debug("Llamada REST ok %o", response);
                $scope.pokemons = response.data.results;
                for (var i = 0; i < $scope.pokemons.length; i++) {

                    pokemonProvider.detalle().then(
                        response => {

                        }
                    )
                    $scope.detalle = ;
                }
            },
            response => { //funcion fallo
                console.warn("Llamada REST ERROR %o", response);
            }
        );
    }
}]);