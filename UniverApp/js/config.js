// var app = angular.module( "app", [ ] );
app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'parciales/home.html'
    })
    .when('/frutas', {
      templateUrl: 'parciales/frutas.html'
    })
    .when('/componentes', {
      templateUrl: 'parciales/componentes.html'
    })
    .when('/creditos', {
      templateUrl: 'parciales/creditos.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})