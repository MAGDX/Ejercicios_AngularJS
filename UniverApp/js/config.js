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
    .when('/creditos', {
      templateUrl: 'parciales/creditos.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})