angular.
module('angularApp'). // Nombre App
component('componenteTabla', { // nombre componente => para usarlo <componente-tabla></componente-tabla>
  templateUrl: './js/components/tabla/template.html',
  controller: function ComponenteTablaController($http) {
    console.trace('Tabla Controller');

    let url = 'http://localhost:3000/frutas';

    $self = this;

    $self.frutas={};

    this.$onInit = function () {
      $http.get(url).then(function (result) {
        console.trace('onInit Tabla %o', result);

        $self.frutas = result.data;
      }, function (result) {
        console.trace('Error al llamar al Servicio REST');

        $scope.alerta = {
          "texto": "<strong>ERROR!</strong> Fallo al obtener las frutas",
          "clase": "danger"
        }
      }); // End GET
    } // End onInit
  } // End Controllador
});