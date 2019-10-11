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
    .when('/creditos', {
      templateUrl: 'parciales/creditos.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})