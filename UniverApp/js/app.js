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

// Providers
app.service('cancionProvider', CancionProvider);
app.service('hpProvider', HPProvider);