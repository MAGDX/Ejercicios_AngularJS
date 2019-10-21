// var app = angular.module( "app", [ ] );
app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'parciales/home.html'
    })
    .when('/frutas', {
      template: '<componente-tabla></componente-tabla>'
    })
    .when('/componentes', {
      templateUrl: 'parciales/componentes.html'
    })
    .when('/alumnos', {
      templateUrl: 'parciales/alumnos.html'
    })
    .when('/programacion-funcional', {
      templateUrl: 'parciales/programacion-funcional.html'
    })
    .when('/contratos', {
      template: '<componente-contratos></componente-contratos>'
    })
    .when('/promesas', {
      templateUrl: 'parciales/promesas.html'
    })
    .when('/servicios', {
      templateUrl: 'parciales/servicios.html'
    })
    .when('/crud', {
      templateUrl: 'parciales/crud.html'
    })
    .when('/formularios', {
      templateUrl: 'parciales/formularios.html'
    })
    .when('/harrypotter', {
      templateUrl: 'parciales/harrypotter.html'
    })
    .when('/harrypotter/:id', {
      templateUrl: 'parciales/detalleHP.html'
    })
    .when('/pokemon', {
      templateUrl: 'parciales/pokemon.html'
    })
    .when('/pokemon/:id', {
      templateUrl: 'parciales/detallePokemon.html'
    })
    .when('/detalle/:id', {
      templateUrl: 'parciales/detalle.html',
      controller: 'detalleController'
    })
    .when('/ejercicios/', {
      templateUrl: 'ejercicios/index.html'
    })
    .when('/ejercicio1/', {
      templateUrl: 'ejercicios/ejercicio1/index.html'
    })
    .when('/ejercicio2/', {
      templateUrl: 'ejercicios/ejercicio2/index.html'
    })
    .when('/ejercicioComponentes/', {
      templateUrl: 'ejercicios/ejerciciocomponentes/index.html'
    })
    .when('/ejercicioCrud/', {
      templateUrl: 'ejercicios/ejercicioCrudTareas/index.html'
    })
    .when('/evaluacion1/', {
      templateUrl: 'ejercicios/evaluacion1/index.html'
    })
    .when('/calificacionesPepe/', {
      templateUrl: 'ejercicios/ejerciciocomponentes/calificaciones_pepe.html'
    })
    .when('/creditos', {
      templateUrl: 'parciales/creditos.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})