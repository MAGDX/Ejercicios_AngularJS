var app = angular.module('angularApp', ['ngRoute', 'ngSanitize']);

/**
 * Constantes
 */

app.constant("servicioConstante", {
    "titulo": "AngularApp",
    "idioma": "es-ES",
    "version": 1.0,
    "autor": "Arkaitz Marcos",
    "github": "https://github.com/MAGDX/Ejercicios_AngularJS"
});

// Valor inicial para Rectangulo
app.value("tamanoInicialRectangulo",{
    ancho:2,
    alto:3
  });

// Clase Rectangulo
function Rectangulo(tamanoInicial) {
    this.ancho = tamanoInicial.ancho;
    this.alto = tamanoInicial.alto;

    this.setAncho = function (ancho) {
        this.ancho = ancho;
    }

    this.setAlto = function (alto) {
        this.alto = alto;
    }

    this.getArea = function () {
        return this.ancho * this.alto;
    }
}

// Definimos el servicio
app.service("rectanguloService", ['tamanoInicialRectangulo', Rectangulo]);

/**
 * Controlador principal
 */
app.controller('mainCtrl', ['$scope', '$http', 'servicioConstante', function ($scope, $http, servicioConstante) {

    $scope.constante = servicioConstante;

    this.$onInit = function () {
        console.log('onInit MainCtrl');

        // Check para saber si esta el servicio REST levantado
        let url = 'http://localhost:3000';

        /*$scope.alerta = {
            "texto" : "<strong>Ongi etorri!</strong>",
            "clase" : "info"
        }*/

        $http.get(url).then(function (result) {
            console.trace('servicio rest funcionando');
            /*$scope.alerta = {
                "texto" : "<strong>FUNCIONA!</strong> El Servicio REST esta operativo",
                "clase" : "success"
            }*/
        }, function (result) {
            console.trace('servicio rest no funcionando');
            $scope.alerta = {
                "texto": "<strong>ERROR!</strong> El Servicio REST NO esta operativo",
                "clase": "danger"
            }
        });
    }
}]);