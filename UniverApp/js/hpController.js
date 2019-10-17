app.controller('hpController', ['$scope', '$routeParams', 'hpProvider', function ($scope, $routeParams, hpProvider) {
    console.trace('hpController');

    $scope.id = $routeParams.id;
    $scope.personaje;

    // Eventos
    this.$onInit = function () {
        console.trace('hpController onInit');

        $scope.listar();
    } // End onInit

    // Funciones
    $scope.listar = function () {

        hpProvider.listar().then(
            response => { //funcion arrow, exito success, llamada OK
                console.debug("Llamada REST ok %o", response);
                $scope.personajes = response.data;
            },
            response => { //funcion fallo
                console.warn("Llamada REST ERROR %o", response);
            }
        );
    }
}]);