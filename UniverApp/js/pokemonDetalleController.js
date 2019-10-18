app.controller('pokemonDetalleController', ['$scope', '$routeParams', 'pokemonProvider', function ($scope, $routeParams, pokemonProvider) {
    console.trace('pokemonDetalleController');

    $scope.id = $routeParams.id;

    // Eventos
    this.$onInit = function () {
        console.trace('pokemonDetalleController onInit');
        
        $scope.detalle($scope.id);
    } // End onInit

    // Funciones
    $scope.detalle = function (id) {

        $scope.alerta = null;

        pokemonProvider.detalle(id).then(
            response => { //funcion arrow, exito success, llamada OK
                console.debug("Llamada REST ok %o", response);
                $scope.pokemon = response.data;
            },
            response => { //funcion fallo
                console.warn("Llamada REST ERROR %o", response);
            }
        );
    }
}]);