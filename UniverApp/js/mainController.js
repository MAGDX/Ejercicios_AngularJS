/**
 * Controlador Principal
 */
app.controller('mainCtrl', ['$scope', '$http', 'servicioConstante', 'rectanguloService', function ($scope,
    $http,
    servicioConstante,
    rectanguloService) {

    this.$onInit = function () {
        console.log('inicio main controller');

        /*$scope.alerta = {
        "texto" : "Ongi etorri",
        "clase" : "success"
        };*/

        $scope.constante = servicioConstante;

        let url = "http://localhost:3000/";

        $http.get(url).then(function (response) {

            console.trace('servicio rest funcionando %o', response);
            /*$scope.alerta = {
            "texto" : "<strong>Yujuuuuu</strong> Esta funcionando Servicio Rest",
            "clase" : "success"
            };
            */

        }, function (response) {

            console.warn('servicio rest fallando %o', response);
            $scope.alerta = {
                "texto": "<strong>Upssssss</strong> Servicio Rest parado",
                "clase": "danger"
            };
        });
    }; // end $onInit
}]);