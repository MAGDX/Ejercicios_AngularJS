app.controller('hpDetalleController', ['$scope', '$routeParams', 'hpProvider', function ($scope, $routeParams, hpProvider) {
    console.trace('hpDetalleController');

    $scope.id = $routeParams.id;

    // Eventos
    this.$onInit = function () {
        console.trace('hpDetalleController onInit');
        
        $scope.detalle($scope.id);
    } // End onInit

    // Funciones
    $scope.detalle = function (id) {

        $scope.alerta = null;

        hpProvider.detalle(id).then(
            response => { //funcion arrow, exito success, llamada OK
                console.debug("Llamada REST ok %o", response);
                $scope.personaje = response.data;
            },
            response => { //funcion fallo
                console.warn("Llamada REST ERROR %o", response);
            }
        );
    }
}]);