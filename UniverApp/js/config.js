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
    .when('/detalle/:id', {
      templateUrl: 'parciales/detalle.html',
      controller: 'detalleController'
    })
    .when('/creditos', {
      templateUrl: 'parciales/creditos.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})