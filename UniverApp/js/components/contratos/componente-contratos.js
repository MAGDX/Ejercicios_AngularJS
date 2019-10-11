angular.
module('angularApp'). // Nombre App
component('componenteContratos', { // nombre componente => para usarlo <componente-contratos></componente-contratos>
  templateUrl: './js/components/contratos/template.html',
  controller: function ComponenteContratosController($http) {
    console.trace('Contratos Controller');
    const ENDPOINT = "http://localhost:3000/contratos/";

    $self = this;

    $self.contratos = {};
    $self.tipoProducto = {};

    // Eventos
    this.$onInit = function () {
      $http.get(ENDPOINT).then(function (result) {
        console.trace('onInit Calificacion %o', result);

        $self.contratos = result.data;

        $self.tipoProducto = self.contratos.filter((v,i,a)=>{
            if(v.TIPPRODUCT == "DV"){
              return v;
            }
        });
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