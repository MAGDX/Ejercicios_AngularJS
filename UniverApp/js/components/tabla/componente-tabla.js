angular.
module('angularApp'). // Nombre App
component('componenteTabla', { // nombre componente => para usarlo <componente-tabla></componente-tabla>
  templateUrl: './js/components/tabla/template.html',
  controller: function ComponenteTablaController($http) {
    console.trace('Tabla Controller');

    let url = 'http://localhost:3000/frutas';

    $self = this;

    $self.frutas = {};

    this.$onInit = function () {
      $http.get(url).then(function (response) {
        console.trace('onInit Tabla');

        $self.frutas = response.data;

        $self.colores = response.data.map((v) => v.color ).filter((v, i, a) => {
          return a.indexOf(v) === i
        });
      }, function (response) {
        console.trace('Error al llamar al Servicio REST: %o', response);

        $scope.alerta = {
          "texto": "<strong>ERROR " + response.status + ":</strong> Fallo al obtener las frutas",
          "clase": "danger"
        }
      }); // End GET
    } // End onInit
  } // End Controllador
});