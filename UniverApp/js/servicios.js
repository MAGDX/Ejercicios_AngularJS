app.controller('serviceController', ['$scope', '$http', '$log', 'servicioConstante', 'rectanguloService',
function ($scope, $http, $log, servicioConstante, rectanguloService) {
    console.trace( 'servicecontroller' );
    $log.info('serviceController con $log');

    $scope.titulo = 'Servicios ' + servicioConstante.titulo;

    rectanguloService.setAlto(2);
    rectanguloService.setAncho(5);

    $scope.area = rectanguloService.getArea();
}]);