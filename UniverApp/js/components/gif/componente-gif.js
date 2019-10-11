angular.
module('angularApp'). // Nombre App
component('componenteGif', { // nombre componente => para usarlo <componente-gif></componente-gif>
  templateUrl: './js/components/gif/template.html',
  controller: function ComponenteGifController($http) {
    console.trace('Gif Controller');
    const ENDPOINT = "http://localhost:3000/frutas/";

    $self = this;

    $self.frutas = {};

    // Eventos
    this.$onInit = function () {
      $http.get(ENDPOINT).then(function (result) {
        console.trace('onInit Calificacion %o', result);

        $self.frutas = result.data;
      }, function (result) {
        console.trace('Error al llamar al Servicio REST');

        $scope.alerta = {
          "texto": "<strong>ERROR:</strong> Fallo al obtener los alumns",
          "clase": "danger"
        }
      }); // End GET
    } // End onInit
  } // End Controllador
});